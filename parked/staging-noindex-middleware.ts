export const config = {
  matcher: '/:path*',
};

const STAGING_HOST = 'stagingmarch26.impulse-english.es';
const NOINDEX = 'noindex, nofollow, noarchive';

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export default async function middleware(request: Request): Promise<Response> {
  const host = (request.headers.get('host') ?? '').toLowerCase();

  if (host !== STAGING_HOST) {
    return fetch(request);
  }

  const url = new URL(request.url);

  if (url.pathname === '/robots.txt') {
    return new Response('User-agent: *\nDisallow: /\n', {
      status: 200,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'x-robots-tag': NOINDEX,
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    });
  }

  const expectedUser = process.env.STAGING_BASIC_AUTH_USER ?? '';
  const expectedPass = process.env.STAGING_BASIC_AUTH_PASS ?? '';

  const unauthorized = () =>
    new Response('Authentication required', {
      status: 401,
      headers: {
        'www-authenticate': 'Basic realm="Staging", charset="UTF-8"',
        'x-robots-tag': NOINDEX,
        'cache-control': 'no-store',
      },
    });

  if (!expectedUser || !expectedPass) {
    return unauthorized();
  }

  const authHeader = request.headers.get('authorization') ?? '';
  if (!authHeader.toLowerCase().startsWith('basic ')) {
    return unauthorized();
  }

  let decoded = '';
  try {
    decoded = atob(authHeader.slice(6).trim());
  } catch {
    return unauthorized();
  }

  const sep = decoded.indexOf(':');
  if (sep === -1) return unauthorized();

  const user = decoded.slice(0, sep);
  const pass = decoded.slice(sep + 1);

  const userOk = timingSafeEqual(user, expectedUser);
  const passOk = timingSafeEqual(pass, expectedPass);
  if (!(userOk && passOk)) return unauthorized();

  const response = await fetch(request);
  const headers = new Headers(response.headers);
  headers.set('x-robots-tag', NOINDEX);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
