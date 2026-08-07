import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CTABand from '../../components/CTABand';
import { NAP } from '../../utils/napData';
import type { ArticleCard } from '../../data/articles/types';

/**
 * Section hub for the study-abroad article cluster (`/blog/extranjero/`).
 *
 * Deliberately does NOT target "estudiar inglés en el extranjero" or
 * "cursos de inglés en el extranjero" — `/ingles-en-el-extranjero/` is the pillar
 * that sells those and already owns them. Two pages chasing one intent is the
 * cannibalisation the SEO reference warns about, and the money page must win.
 * This one is a Tier-1 organiser: it exists to group the cluster, pass authority
 * down to 21 articles that previously had no parent, and send readers up to the
 * pillar. If it ranks for "guías"-shaped queries, that is a bonus, not the job.
 *
 * Lives in `pages/extranjero/` rather than `pages/blog/` on purpose:
 * `scripts/verify-design/run.mjs` only audits `pages/cursos`, `pages/ubicaciones`
 * and `pages/extranjero`. Filed under `pages/blog/` this page would be silently
 * ungated — and an ungated page is how the last seven drifted off the system.
 */

interface Group {
  /** Rendered as the eyebrow above the group's h2. */
  eyebrow: string;
  heading: string;
  intro: string;
  slugs: string[];
}

/**
 * The reading order a parent actually follows: decide the format, then picture the
 * daily reality, then the shorter options, then the other destinations, then the
 * adult routes, and only then the money. Alphabetical order taught them nothing.
 */
const GROUPS: Group[] = [
  {
    eyebrow: 'Empieza por aquí',
    heading: 'Año escolar, trimestre y Transition Year',
    intro:
      'La primera decisión no es el destino, es el formato y el curso. Un año completo, un trimestre y el Transition Year irlandés no se parecen en nada en precio, en madurez que exigen ni en cómo encajan con el instituto de aquí.',
    slugs: [
      'ano-escolar-extranjero-guia-padres',
      'ano-escolar-inglaterra-irlanda',
      'trimestre-escolar-irlanda',
      'transition-year-irlanda-4-eso',
      'ano-escolar-estados-unidos',
      'convalidar-curso-escolar-extranjero',
    ],
  },
  {
    eyebrow: 'Cómo es por dentro',
    heading: 'La vida real en Irlanda',
    intro:
      'Lo que más preguntan las familias no aparece en los folletos: con quién va a vivir, cómo funciona el colegio de allí, cuándo son las vacaciones y cuánto cuesta el día a día.',
    slugs: [
      'elegir-familia-acogida-irlanda',
      'sistema-educativo-irlandes-guia',
      'calendario-escolar-irlanda-vacaciones',
      'vivir-en-irlanda-coste-real',
    ],
  },
  {
    eyebrow: 'Verano',
    heading: 'Campamentos de verano',
    intro:
      'Dos o tres semanas son la forma habitual de probar la experiencia antes de comprometerse con un curso entero, y la manera de saber si vuestro hijo lo lleva bien.',
    slugs: ['campamento-verano-irlanda-guia', 'campamentos-verano-inglaterra'],
  },
  {
    eyebrow: 'Otros destinos',
    heading: 'Inglaterra y Malta',
    intro:
      'Irlanda es nuestro destino principal, pero no es el único que tiene sentido. Inglaterra pesa por sus internados y Malta por los cursos intensivos de verano para adultos.',
    slugs: [
      'estudiar-bachillerato-inglaterra',
      'guia-internados-inglaterra-precios',
      'estudiar-ingles-malta-consejos',
    ],
  },
  {
    eyebrow: 'Para adultos',
    heading: 'Cursos, trabajo y au pair',
    intro:
      'No todo el que se va al extranjero está en el instituto. Estas son las rutas para adultos y para quien se plantea trabajar allí mientras mejora el inglés.',
    slugs: ['cursos-ingles-irlanda-adultos', 'trabajar-irlanda-sin-ingles', 'ser-au-pair-irlanda'],
  },
  {
    eyebrow: 'El dinero',
    heading: 'Becas y con quién lo contratas',
    intro:
      'Las becas reales son menos de las que se anuncian, y quién organiza el viaje cambia lo que pasa cuando algo va mal a dos mil kilómetros de casa.',
    slugs: [
      'becas-bachillerato-extranjero-reales',
      'becas-inmersion-linguistica-ministerio',
      'academia-o-agencia-estudiar-extranjero',
    ],
  },
];

interface Props {
  articles: ArticleCard[];
}

function ArticleGrid({ items }: { items: ArticleCard[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {items.map((article) => (
        <a key={article.id} href={article.href} className="card-interactive group flex flex-col p-6">
          <h3 className="t-h3 mb-2 text-zinc-900 group-hover:text-accent-blue">{article.title}</h3>
          {article.excerpt ? <p className="t-small mb-4 text-zinc-600">{article.excerpt}</p> : null}
          <span className="mt-auto flex items-center justify-between">
            {article.readTime ? (
              <span className="t-small flex items-center gap-1.5 text-zinc-500">
                <Clock className="h-3.5 w-3.5" />
                {article.readTime}
              </span>
            ) : (
              <span />
            )}
            <ArrowRight className="h-4 w-4 text-accent-blue opacity-0 transition-opacity group-hover:opacity-100" />
          </span>
        </a>
      ))}
    </div>
  );
}

export default function ExtranjeroBlogHubPage({ articles }: Props) {
  const bySlug = new Map(articles.map((a) => [a.id, a]));
  const grouped = GROUPS.map((g) => ({
    ...g,
    items: g.slugs.map((s) => bySlug.get(s)).filter((a): a is ArticleCard => Boolean(a)),
  })).filter((g) => g.items.length > 0);

  // Anything not named in GROUPS still gets a home. A hand-written list that
  // silently swallows a new article is exactly how the cluster ended up
  // unreachable in the first place — so the leftovers are rendered, not dropped.
  const placed = new Set(GROUPS.flatMap((g) => g.slugs));
  const rest = articles.filter((a) => !placed.has(a.id));

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="section-lead surface-alt px-6">
        <div className="container-narrow">
          <Breadcrumb
            variant="dark"
            className="mb-8"
            items={[{ label: 'Blog', href: '/blog/' }, { label: 'Inglés en el extranjero' }]}
          />
          <span className="eyebrow mb-4">Inglés en el extranjero</span>
          <h1 className="t-h1 mb-6 text-zinc-900">
            Guías sobre estudiar inglés en el extranjero
          </h1>
          <span className="rule mb-8"></span>
          <p className="t-lede measure mb-4 text-zinc-600">
            {articles.length} guías escritas para las preguntas que nos hacen las familias antes de
            decidir: qué formato encaja, cómo es la vida allí de verdad, qué entra en el precio y
            qué no.
          </p>
          <p className="t-body measure mb-8 text-zinc-600">
            Si lo que buscas es lo que ofrecemos nosotros —destinos, fechas y cómo funciona— eso
            está en la página de{' '}
            <a href="/ingles-en-el-extranjero/" className="text-accent-blue underline">
              inglés en el extranjero
            </a>
            . Esto de aquí es la parte de leer y comparar antes de dar el paso.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="/ingles-en-el-extranjero/" className="btn-primary">
              Ver nuestros programas
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={NAP.whatsappDaniel} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Preguntar a Daniel
            </a>
          </div>
        </div>
      </section>

      {grouped.map((g, i) => (
        <section key={g.heading} className={i % 2 === 1 ? 'section surface-alt px-6' : 'section px-6'}>
          <div className="container-narrow">
            <div className="mb-10 max-w-2xl">
              <span className="eyebrow mb-4">{g.eyebrow}</span>
              <h2 className="t-h2 mb-5 text-zinc-900">{g.heading}</h2>
              <span className="rule"></span>
            </div>
            <p className="t-body measure mb-8 text-zinc-600">{g.intro}</p>
            <ArticleGrid items={g.items} />
          </div>
        </section>
      ))}

      {rest.length > 0 ? (
        <section className="section px-6">
          <div className="container-narrow">
            <div className="mb-10 max-w-2xl">
              <span className="eyebrow mb-4">Y además</span>
              <h2 className="t-h2 mb-5 text-zinc-900">Más sobre inglés en el extranjero</h2>
              <span className="rule"></span>
            </div>
            <ArticleGrid items={rest} />
          </div>
        </section>
      ) : null}

      <CTABand
        title="¿Prefieres preguntar antes de leerte veintiuna guías?"
        subtitle="Cuéntanos la edad, el curso y las fechas que barajáis. Daniel Fitzpatrick, cofundador irlandés de la academia, te dice con franqueza qué encaja, qué no y cuánto cuesta de verdad."
        ctaText="Ver los programas"
        ctaHref="/ingles-en-el-extranjero/"
        whatsappText="Hola Daniel, estoy leyendo las guías de inglés en el extranjero y me gustaría preguntarte una cosa"
        whatsappUrl={NAP.whatsappDaniel}
        whatsappLabel="Escribir a Daniel"
      />

      <Footer />
    </div>
  );
}
