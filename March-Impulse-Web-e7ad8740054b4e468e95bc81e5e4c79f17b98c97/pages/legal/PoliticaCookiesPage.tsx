import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import SEOHead from '../../components/SEOHead';

export default function PoliticaCookiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Política de Cookies"
        description="Política de cookies de Impulse English Academy. Información sobre el uso de cookies en nuestro sitio web."
        canonical="/politica-cookies"
        noindex={true}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 hero-grain opacity-[0.04]"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Legal', href: '/aviso-legal' },
              { label: 'Política de Cookies' }
            ]}
            variant="light"
          />
          <div className="max-w-3xl mt-10">
            <h1 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-[1.1] mb-4">
              Política de Cookies
            </h1>
            <div className="w-12 h-0.5 bg-brand-red mb-4"></div>
            <p className="font-display text-white/50 text-sm">
              Última actualización: 23 de enero de 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-zinc max-w-none">

            <div className="bg-zinc-50 p-6 rounded-xl mb-8">
              <p className="text-sm text-zinc-600 mb-0">
                <strong>ORGANIZACIÓN:</strong> Daniel John Fitzpatrick<br />
                <strong>Dirección:</strong> Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid<br />
                <strong>CIF:</strong> Y3699929W<br />
                <strong>Fecha de emisión:</strong> 23/01/2024
              </p>
            </div>

            <p className="text-zinc-600 text-sm mb-8">
              Cumplimiento de los principios y obligaciones recogidos en el Reglamento (UE) 2016/679 (RGPD),
              en la Ley Orgánica 3/2018 (LOPDGDD) y en la Ley 34/2002 (LSSI).
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">1. Aviso de Cookies</h2>
            <p className="text-zinc-600 mb-4">
              Usamos cookies propias y de terceros para mejorar nuestros servicios, elaborar información
              estadística, analizar la navegación de los usuarios y poder ofrecer contenidos de su interés.
            </p>
            <p className="text-zinc-600 mb-4">
              El RGPD exige un consentimiento expreso y no tácito, por lo tanto, es necesaria la aceptación
              por medio de un botón como medio válido.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">2. Definición y Función de las Cookies</h2>
            <p className="text-zinc-600 mb-4">
              Las cookies, o trazadores similares, son datos utilizados por un servidor para enviar información
              de estado al navegador de un usuario, y por ese navegador para enviar información de estado al
              servidor original.
            </p>
            <p className="text-zinc-600 mb-4">
              Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre
              los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan
              y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>
            <p className="text-zinc-600 mb-4">
              Téngase en cuenta que usar nuestra web con cookies deshabilitadas puede hacer que la web no funcione
              adecuadamente, y que en determinadas zonas dé errores.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">Tipos de Cookies según Tiempo de Duración</h3>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li>
                <strong>Cookies de Sesión:</strong> son un tipo de cookies diseñadas para recabar y almacenar datos
                mientras el usuario accede a una página web. Estas cookies sólo funcionan durante la sesión del
                navegador, siendo borradas una vez finaliza dicha sesión.
              </li>
              <li>
                <strong>Cookies Persistentes:</strong> son un tipo de cookies en el que los datos siguen almacenados
                en el navegador y pueden ser accedidos y tratados durante un periodo definido por el responsable
                de la cookie, y que puede tener una duración de unos minutos a varios años.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">Tipos de Cookies según Servicio Ofrecido</h3>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li>
                <strong>Cookies Técnicas:</strong> son aquellas que resultan imprescindibles para que se pueda
                navegar por el sitio Web correctamente. Garantizan que la página se muestre de forma adecuada.
              </li>
              <li>
                <strong>Cookies Analíticas:</strong> nos permiten cuantificar el número de usuarios y realizar
                la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.
                Esta cookie ofrece información agregada, anónima y de carácter estadístico.
              </li>
              <li>
                <strong>Cookies de Personalización:</strong> permiten al usuario acceder al servicio con algunas
                características predefinidas en función de criterios como la navegación del usuario, configuración
                regional, etc.
              </li>
              <li>
                <strong>Cookies de Funcionalidades:</strong> tienen como objetivo adaptar el sitio web a las
                preferencias de visualización, tales como idioma, resolución de pantalla, sistema operativo, etc.
              </li>
              <li>
                <strong>Cookies Publicitarias:</strong> nos permiten mostrar productos y/o servicios al visitar
                alguna página web externa previo consentimiento expreso del usuario.
              </li>
              <li>
                <strong>Cookies de Afiliación:</strong> identifican el sitio web original de terceros que ha
                redirigido al usuario al sitio web.
              </li>
              <li>
                <strong>Cookies de Redes Sociales:</strong> colocadas por terceros, permiten compartir en redes
                sociales su opinión sobre la web y compartir contenido.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">Tipos de Cookies según Propiedad</h3>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li>
                <strong>Cookies Propias:</strong> son aquellas que se envían al navegador del usuario desde un
                equipo o dominio gestionado por nosotros y desde el que se presta el servicio solicitado.
              </li>
              <li>
                <strong>Cookies de Terceros:</strong> son aquellas que se envían al navegador del usuario desde
                un equipo o dominio que no es gestionado por nosotros, sino por otra entidad que trata los datos
                obtenidos a través de las cookies.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">3. Revocación y Eliminación de Cookies por Tipo de Navegador</h2>
            <p className="text-zinc-600 mb-4">
              La instalación de ciertas cookies está sujeta a su consentimiento. Cuando visita la web por primera
              vez, mediante un banner de información, se le solicita si acepta la instalación de este tipo de cookie.
              Las cookies solo se activarán después de su aceptación al continuar su navegación en la web.
            </p>
            <p className="text-zinc-600 mb-4">
              Para más información sobre cómo bloquear el uso de las cookies en los diferentes navegadores:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li>
                <strong>Chrome:</strong>{' '}
                <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                  https://support.google.com/chrome/answer/95647?hl=es
                </a>
              </li>
              <li>
                <strong>Firefox:</strong>{' '}
                <a href="https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                  https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros
                </a>
              </li>
              <li>
                <strong>Internet Explorer:</strong>{' '}
                <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                  https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies
                </a>
              </li>
              <li>
                <strong>Microsoft Edge:</strong>{' '}
                <a href="https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                  https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies
                </a>
              </li>
              <li>
                <strong>Safari:</strong>{' '}
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                  https://support.apple.com/es-es/guide/safari/sfri11471/mac
                </a>
              </li>
              <li>
                <strong>Opera:</strong>{' '}
                <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                  https://help.opera.com/en/latest/web-preferences/#cookies
                </a>
              </li>
            </ul>
            <p className="text-zinc-600 mb-4">
              Además, en su navegador puede activar el modo incógnito o privado, para borrar las cookies y el
              historial de navegación una vez termine su sesión de navegación.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">Revocación de Cookies por Servicio</h3>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li>
                <strong>Google Analytics:</strong>{' '}
                <a href="https://tools.google.com/dlpage/gaoptout?hl=es" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                  https://tools.google.com/dlpage/gaoptout?hl=es
                </a>
              </li>
              <li>
                <strong>Adobe Analytics:</strong>{' '}
                <a href="http://www.adobe.com/es/privacy/opt-out.html" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">
                  http://www.adobe.com/es/privacy/opt-out.html
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">4. Administración de las Cookies y Otros Marcadores</h2>
            <p className="text-zinc-600 mb-4">
              En cumplimiento de la normativa vigente, le informamos de que este sitio web utiliza cookies tanto
              propias como de terceros para diversas finalidades. Estos pueden instalarse en su terminal según
              las selecciones y opciones que haya realizado.
            </p>
            <p className="text-zinc-600 mb-4">
              Como persona usuaria puede permitir, bloquear o eliminar las cookies instaladas en su navegador
              mediante la configuración de las opciones del navegador instalado en su ordenador.
            </p>
            <p className="text-zinc-600 mb-4">
              Hay varias formas de administrar las cookies y otros marcadores. Como persona usuaria puede
              configurar su navegador para:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li>Aceptar todas las cookies</li>
              <li>Rechazar todas las cookies</li>
              <li>Elegir las que acepta según sus emisores</li>
              <li>Aceptar o rechazar las cookies caso por caso antes de que se instalen</li>
            </ul>
            <p className="text-zinc-600 mb-4">
              Si su navegador está configurado para aceptar cookies en su dispositivo, las cookies incrustadas
              en las páginas y el contenido que ha visto pueden almacenarse temporalmente en un área dedicada
              de su dispositivo.
            </p>
            <p className="text-zinc-600 mb-4">
              Por el contrario, puede configurar su navegador para que rechace las cookies. Al configurar su
              navegador para rechazar cookies, ciertas características, páginas y espacios en de la web no serán
              accesibles.
            </p>
            <p className="text-zinc-600 mb-4">
              La Organización considera una buena práctica siguiendo las recomendaciones de la AEPD, que la
              validez del consentimiento prestado por una persona usuaria para el uso de una determinada cookie
              no tenga una duración superior a 24 meses.
            </p>

            <div className="mt-12 p-6 bg-zinc-50 rounded-xl">
              <h3 className="font-bold text-zinc-900 mb-4">Contacto</h3>
              <p className="text-zinc-600 mb-2">
                <strong>Email:</strong> info@impulse-english.es
              </p>
              <p className="text-zinc-600 mb-2">
                <strong>Teléfono:</strong> 604 910 611
              </p>
              <p className="text-zinc-600">
                <strong>Dirección:</strong> Av. de El Ferrol, 22, 28029 Madrid
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer variant="simple" />
    </>
  );
}
