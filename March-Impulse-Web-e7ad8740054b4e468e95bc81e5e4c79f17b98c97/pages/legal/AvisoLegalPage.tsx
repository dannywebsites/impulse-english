import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';

export default function AvisoLegalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 hero-grain opacity-[0.04]"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <Breadcrumb
            items={[
              { label: 'Legal', href: '/aviso-legal' },
              { label: 'Aviso Legal' }
            ]}
            variant="light"
          />
          <div className="max-w-3xl mt-10">
            <h1 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-[1.1] mb-4">
              Aviso Legal
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

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">1. Información General</h2>
            <p className="text-zinc-600 mb-4">
              En cumplimiento del deber de información establecido en el artículo 10 de la Ley 34/2002,
              de Servicios de la Sociedad de la Información y de Comercio Electrónico, le comunicamos que
              el titular del sitio web https://impulse-english.es/ es Daniel John Fitzpatrick.
            </p>
            <p className="text-zinc-600 mb-4">
              Los datos identificativos y de contacto con los titulares del sitio web son los siguientes:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li><strong>Titular:</strong> Daniel John Fitzpatrick</li>
              <li><strong>Domicilio:</strong> Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar</li>
              <li><strong>Código postal:</strong> 28029</li>
              <li><strong>Localidad:</strong> Madrid</li>
              <li><strong>Provincia:</strong> Madrid</li>
              <li><strong>CIF:</strong> Y3699929W</li>
              <li><strong>Teléfono:</strong> 604 910 611</li>
              <li><strong>E-mail:</strong> info@impulse-english.es</li>
            </ul>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">2. Objeto y Ámbito de Aplicación</h2>
            <p className="text-zinc-600 mb-4">
              2.1. Mediante este Aviso Legal se establecen las condiciones generales de uso que regulan el acceso,
              navegación y uso del sitio web https://impulse-english.es/ (en adelante, Sitio Web), así como las
              responsabilidades derivadas de la utilización de sus contenidos.
            </p>
            <p className="text-zinc-600 mb-4">
              2.2. Este Sitio Web es un servicio que LA ORGANIZACIÓN pone a disposición de los usuarios de Internet
              con finalidad informativa, pudiendo efectuar en cualquier momento y sin previo aviso las modificaciones
              que considere oportunas en su diseño, configuración y contenidos.
            </p>
            <p className="text-zinc-600 mb-4">
              2.3. El acceso y uso de este Sitio Web atribuye al visitante la condición de USUARIO e implica su
              aceptación de forma plena y sin reservas, desde dicho acceso y/o uso, de todas y cada una de las
              condiciones de uso que LA ORGANIZACIÓN incluya en este Aviso Legal.
            </p>
            <p className="text-zinc-600 mb-4">
              2.4. El USUARIO se obliga a hacer un uso correcto del Sitio Web, de conformidad con las leyes
              aplicables, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">3. Acceso y Utilización del Sitio Web</h2>
            <p className="text-zinc-600 mb-4">
              3.1. El acceso a este Sitio Web es libre y gratuito, salvo en lo relativo al coste de conexión
              de la red de telecomunicaciones suministrada por el operador contratado por cada USUARIO.
            </p>
            <p className="text-zinc-600 mb-4">
              3.2. El USUARIO asume la responsabilidad del uso del Sitio Web. El USUARIO se compromete a no emplear
              los contenidos para, entre otros usos:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li>Utilizar identidades falsas o suplantar la identidad de otros usuarios</li>
              <li>Introducir en la red virus informáticos o realizar actuaciones susceptibles de alterar, dañar o interrumpir sistemas</li>
              <li>Intentar acceder a las cuentas de correo electrónico de otros usuarios</li>
              <li>Reproducir, copiar o distribuir los contenidos del Sitio Web sin autorización</li>
              <li>Vulnerar cualesquiera derechos de propiedad intelectual o industrial</li>
              <li>Utilizar los contenidos para actividades contrarias a la ley o al orden público</li>
            </ul>
            <p className="text-zinc-600 mb-4">
              3.3. LA ORGANIZACIÓN se reserva el derecho a interrumpir en cualquier momento y sin previo aviso
              el acceso al Sitio Web, ya sea por motivos técnicos, de seguridad, o por cualquier otra causa.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">4. Protección de Datos Personales</h2>
            <p className="text-zinc-600 mb-4">
              4.1. LA ORGANIZACIÓN se compromete al tratamiento de los datos personales de manera respetuosa
              con los derechos de sus titulares, y de conformidad a la normativa de protección de datos vigente.
            </p>
            <p className="text-zinc-600 mb-4">
              4.2. En la sección POLÍTICAS DE PRIVACIDAD del Sitio Web se pone a disposición permanente del
              USUARIO la información legal correspondiente a los distintos tratamientos de datos.
            </p>
            <p className="text-zinc-600 mb-4">
              4.3. En el caso de que el USUARIO cumplimente voluntariamente cualquiera de los formularios
              online de recogida de datos, se compromete a proporcionar datos exactos y veraces.
            </p>
            <p className="text-zinc-600 mb-4">
              4.4. No se permite que los menores de 13 años faciliten sus datos personales a través del Sitio Web,
              siendo necesaria la previa autorización expresa de sus padres o tutores.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">5. Propiedad Intelectual e Industrial</h2>
            <p className="text-zinc-600 mb-4">
              5.1. Todos los elementos del Portal (códigos fuente, bases de datos, diseño, imágenes, fotografías,
              dibujos, gráficos, animaciones, aplicativos, motores de búsqueda, páginas, logotipos, marcas y nombres
              comerciales) son propiedad de LA ORGANIZACIÓN o han sido cedidos al mismo.
            </p>
            <p className="text-zinc-600 mb-4">
              5.2. En ningún caso se entenderá que el acceso y navegación del USUARIO en el Sitio Web implica
              una renuncia, transmisión, licencia o cesión total o parcial de dichos derechos.
            </p>
            <p className="text-zinc-600 mb-4">
              5.3. La distribución, modificación, cesión o comunicación pública de los contenidos y cualquier
              otro acto que no haya sido expresamente autorizado por el titular de los derechos de explotación,
              quedan prohibidos.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">6. Marcas Registradas</h2>
            <p className="text-zinc-600 mb-4">
              Todas las marcas, logotipos y anagramas mostrados en este sitio son propiedad de LA ORGANIZACIÓN
              o de terceras empresas. Queda expresamente prohibida la utilización, sin previo consentimiento,
              de cualquier elemento de esta página web que sea objeto de protección.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">7. Exclusión de Garantías y Responsabilidad</h2>
            <p className="text-zinc-600 mb-4">
              7.1. El contenido de este Sitio Web tiene finalidad informativa y de creación de un canal de
              comunicación con los USUARIOS, sin que sus contenidos puedan considerarse como asesoramiento exhaustivo.
            </p>
            <p className="text-zinc-600 mb-4">
              7.2. LA ORGANIZACIÓN excluye, hasta donde permita la ley, cualquier responsabilidad por los daños
              y perjuicios derivados de errores u omisiones en los contenidos, falta de disponibilidad del Sitio Web,
              o la transmisión de virus o programas maliciosos.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">8. Enlaces</h2>
            <p className="text-zinc-600 mb-4">
              8.1. En el caso de que en el Sitio Web se dispusiesen enlaces o hipervínculos hacia otros sitios
              de Internet, LA ORGANIZACIÓN no ejercerá ningún control sobre dichos sitios y contenidos.
            </p>
            <p className="text-zinc-600 mb-4">
              8.2. La inclusión de cualquier tipo de enlace por parte de LA ORGANIZACIÓN a otros sitios de
              Internet no implica que exista ningún tipo de relación, asociación, colaboración o dependencia.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">9. Derecho de Exclusión</h2>
            <p className="text-zinc-600 mb-4">
              LA ORGANIZACIÓN se reserva el derecho a denegar o retirar el acceso a este Sitio Web y/o a los
              contenidos y servicios ofrecidos, sin necesidad de preaviso, a aquellos USUARIOS que incumplan
              las presentes condiciones generales de uso.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">10. Generalidades</h2>
            <p className="text-zinc-600 mb-4">
              10.1. En caso de existir discrepancia entre lo establecido en estas condiciones generales de uso
              y las condiciones particulares de cada servicio específico, prevalecerá lo dispuesto en éstas últimas.
            </p>
            <p className="text-zinc-600 mb-4">
              10.2. Si cualquier disposición de este Aviso Legal fuera declarado nulo o inaplicable, dicha
              nulidad no afectará a las restantes disposiciones.
            </p>
            <p className="text-zinc-600 mb-4">
              10.3. LA ORGANIZACIÓN podrá modificar en todo o en parte y en cualquier momento las condiciones
              aquí determinadas, y dichas modificaciones tendrán vigencia desde el mismo momento de su publicación.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">11. Espacios con Acceso Restringido</h2>
            <p className="text-zinc-600 mb-4">
              El acceso a ciertos apartados de este Sitio Web está protegido por código de usuario y contraseña.
              Las credenciales de acceso son personales e intransferibles, siendo responsabilidad del usuario
              mantenerlas en secreto.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">12. Redes Sociales</h2>
            <p className="text-zinc-600 mb-4">
              LA ORGANIZACIÓN puede estar presente en redes sociales de Internet. Estos espacios se considerarán
              oficiales, no asumiendo responsabilidad por el uso o contenidos dispuestos en cualesquiera otras
              cuentas o espacios abiertos por parte de terceros.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">13. Ley Aplicable y Jurisdicción</h2>
            <p className="text-zinc-600 mb-4">
              Las relaciones establecidas entre LA ORGANIZACIÓN, como titular de este Sitio Web, y el USUARIO,
              se regirán por lo dispuesto en la normativa vigente. Para los casos en que la normativa prevea
              la posibilidad de que las partes se sometan a un fuero, LA ORGANIZACIÓN y el USUARIO, con renuncia
              expresa a cualquier otro fuero, se someten a los Juzgados y Tribunales de Madrid.
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
