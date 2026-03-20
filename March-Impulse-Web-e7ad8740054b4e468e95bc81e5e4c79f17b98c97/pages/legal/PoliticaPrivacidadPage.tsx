import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import SEOHead from '../../components/SEOHead';

export default function PoliticaPrivacidadPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="Política de Privacidad"
        description="Política de privacidad de Impulse English Academy. Información sobre el tratamiento de datos personales según RGPD y LOPDGDD."
        canonical="/politica-privacidad"
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
              { label: 'Política de Privacidad' }
            ]}
            variant="light"
          />
          <div className="max-w-3xl mt-10">
            <h1 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-[1.1] mb-4">
              Política de Privacidad
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

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">I. Introducción</h2>
            <p className="text-zinc-600 mb-4">
              Daniel John Fitzpatrick (en adelante, la organización) se reserva la facultad de modificar
              esta Política con el objeto de adaptarla a novedades legislativas, criterios jurisprudenciales,
              prácticas del sector, o intereses de la entidad. Cualquier modificación en la misma será
              anunciada con la debida antelación.
            </p>
            <p className="text-zinc-600 mb-4">
              Para poder prestarte determinados servicios es necesaria la gestión de tus datos personales.
              A estos efectos, los mismos se incorporarán a las correspondientes actividades de tratamiento
              de La organización, de conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y
              del Consejo (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">II. Información General</h2>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">1. ¿Quién es el Responsable del tratamiento de sus datos personales?</h3>
            <p className="text-zinc-600 mb-4">
              La organización Daniel John Fitzpatrick, con CIF: Y3699929W, tiene la condición de responsable
              del Tratamiento, con domicilio social en Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid.
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li><strong>E-mail de contacto:</strong> info@impulse-english.es</li>
              <li><strong>Nuestra web:</strong> https://impulse-english.es/</li>
            </ul>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">2. ¿Para qué tratamos sus datos personales?</h3>
            <p className="text-zinc-600 mb-4">
              La finalidad de la recogida y tratamiento de los datos personales, a través de los distintos
              formularios puestos a disposición de los Usuarios, responden para gestionar y atender a
              solicitudes de información, dudas, quejas, felicitaciones o sugerencias.
            </p>
            <p className="text-zinc-600 mb-4">En concreto tratamos los datos con estas finalidades:</p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li>Información y tramitación de la solicitud de alta y gestión de su condición como Cliente de la organización</li>
              <li>Gestión económica, contable, administrativa y de facturación</li>
              <li>Gestión de las solicitudes de suscripción para la recepción de comunicados y boletines electrónicos</li>
              <li>Atención, respuesta y gestión de las solicitudes de información o de contacto</li>
              <li>Envío de información sobre los servicios propios de la organización, jornadas y eventos</li>
              <li>Realización de estudios de mercado para medir la calidad de los servicios, a través de encuestas de satisfacción</li>
              <li>En el caso de compras a través de la página web, gestionar la relación contractual</li>
            </ul>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">3. ¿Cuál es la base jurídica que legitima el tratamiento?</h3>
            <p className="text-zinc-600 mb-4">
              La base jurídica que nos legitima para el tratamiento de sus datos personales son las siguientes:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li>El consentimiento otorgado por usted mediante la firma o aceptación de los pertinentes formularios, para uno o varios fines específicos</li>
              <li>La ejecución de un contrato del que Ud. sea parte, en condición de contratista o cliente</li>
            </ul>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">4. ¿Durante cuánto tiempo conservamos sus datos personales?</h3>
            <p className="text-zinc-600 mb-4">
              Sus datos personales los conservaremos durante el plazo correspondiente para mantener un historial
              de atención y gestionar nuestros servicios de forma eficiente y la persona interesada no solicite
              su supresión.
            </p>
            <p className="text-zinc-600 mb-4">
              Incluso solicitada la supresión, se mantendrán bloqueados durante el tiempo necesario para:
              cumplir con las obligaciones legales/contractuales, durante los plazos legales previstos para
              la prescripción de responsabilidades y/o el ejercicio o la defensa de reclamaciones.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">5. ¿Quién debe mantener los datos actualizados?</h3>
            <p className="text-zinc-600 mb-4">
              Con el fin de que los datos obrantes en nuestros ficheros siempre correspondan a la realidad,
              se tratará de mantener actualizados. El Usuario deberá realizar los cambios directamente cuando
              así esté habilitado o comunicándose con la organización.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">6. ¿Quiénes pueden ser cesionarios de sus datos personales?</h3>
            <p className="text-zinc-600 mb-4">
              Los datos personales no serán cedidos o comunicados a terceros, salvo en los supuestos necesarios
              para el desarrollo, control y cumplimiento de las finalidades expresadas, en los supuestos previstos según Ley.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">7. Seguridad de los datos personales</h3>
            <p className="text-zinc-600 mb-4">
              La organización adoptará en su sistema de información las medidas técnicas y organizativas adecuadas,
              dando cumplimiento al principio de responsabilidad proactiva, a fin de garantizar la seguridad y
              confidencialidad de los datos almacenados, evitando así su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">8. ¿Cuáles son sus derechos en protección de datos?</h3>
            <p className="text-zinc-600 mb-4">
              Ud. podrá ejercitar los derechos de acceso, rectificación, supresión, limitación, portabilidad o,
              en su caso, oposición. Para ello, deberá presentar un escrito en la organización, mediante correo
              electrónico dirigido a info@impulse-english.es o la dirección postal indicada anteriormente.
            </p>
            <p className="text-zinc-600 mb-4">
              En el escrito deberá especificar cuál de estos derechos solicita sea satisfecho y deberá mostrar
              o acompañar la fotocopia del DNI o documento identificativo equivalente.
            </p>
            <p className="text-zinc-600 mb-4">
              Asimismo, en caso de considerar vulnerado su derecho a la protección de datos personales, podrá
              interponer una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">III. Información Complementaria sobre Derechos</h2>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">a) ¿Cuáles son mis derechos?</h3>

            <div className="bg-zinc-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-zinc-900 mb-2">Derecho de acceso</h4>
              <p className="text-zinc-600 text-sm mb-0">
                Usted tiene derecho a conocer si estamos tratando o no datos personales que le conciernen,
                el origen de sus datos, los fines del tratamiento, las categorías de datos, los destinatarios,
                el plazo de conservación, el derecho a presentar una reclamación, y si tomamos decisiones
                automatizadas usando sus datos personales.
              </p>
            </div>

            <div className="bg-zinc-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-zinc-900 mb-2">Derecho de rectificación</h4>
              <p className="text-zinc-600 text-sm mb-0">
                Usted tiene derecho a que se rectifiquen sus datos personales: completándolos si fuesen incompletos,
                actualizándolos o rectificándolos si ya no resultasen acordes a la realidad vigente o fuesen inexactos.
              </p>
            </div>

            <div className="bg-zinc-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-zinc-900 mb-2">Derecho de supresión</h4>
              <p className="text-zinc-600 text-sm mb-0">
                Usted tiene derecho a que se supriman sus datos personales cuando ya no sean necesarios para los
                fines para los que fueron recogidos, cuando retire el consentimiento, cuando haya ejercitado con
                éxito el derecho de oposición, o cuando los datos hayan sido tratados ilícitamente.
              </p>
            </div>

            <div className="bg-zinc-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-zinc-900 mb-2">Derecho a la limitación del tratamiento</h4>
              <p className="text-zinc-600 text-sm mb-0">
                Usted tendrá derecho a obtener la limitación del tratamiento de sus datos personales
                (es decir, que los conservemos sin utilizarlos para los fines previstos).
              </p>
            </div>

            <div className="bg-zinc-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-zinc-900 mb-2">Derecho de oposición</h4>
              <p className="text-zinc-600 text-sm mb-0">
                Usted tendrá derecho a solicitarnos que dejemos de usar sus datos personales, por ejemplo,
                cuando crea que los datos personales que tenemos sobre usted puedan ser incorrectos o crea
                que ya no necesitemos usarlos.
              </p>
            </div>

            <div className="bg-zinc-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-zinc-900 mb-2">Derecho de portabilidad</h4>
              <p className="text-zinc-600 text-sm mb-0">
                Cuando el tratamiento de sus datos esté basado en el consentimiento o sea necesario para la
                ejecución de un contrato, usted tendrá derecho a que se le entreguen sus datos en formato
                estructurado, de uso común y lectura mecánica, incluso a remitírselos a un nuevo responsable.
              </p>
            </div>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">b) ¿Quién puede ejercitar estos derechos?</h3>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li>Usted en calidad de interesado o titular de los datos, actuando en su propio nombre y derecho</li>
              <li>A través de otra persona que actúe como representante legal o voluntario debidamente acreditada</li>
            </ul>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">c) ¿Cómo y dónde puedo ejercitar estos derechos?</h3>
            <p className="text-zinc-600 mb-4">
              <strong>Por correo Postal:</strong> Av. de El Ferrol, 22, La Vaguada, Barrio del Pilar, 28029 Madrid
            </p>
            <p className="text-zinc-600 mb-4">
              <strong>Por internet:</strong> info@impulse-english.es
            </p>
            <p className="text-zinc-600 mb-4">
              En ambos casos, deberá aportar los datos e información suficientes para atender la solicitud,
              firmar el impreso de manera manuscrita o electrónicamente, y adjuntar fotocopia del DNI o
              documento identificativo equivalente.
            </p>

            <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">IV. Información Adicional sobre Protección de Datos</h2>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">1. Clientes</h3>
            <p className="text-zinc-600 mb-4">
              Sus datos son tratados por la organización como responsable del tratamiento. Sus datos personales
              serán utilizados con la finalidad de mantener relaciones de cualquier índole con nuestros clientes
              como consecuencia de la relación contractual que mantenemos.
            </p>
            <p className="text-zinc-600 mb-4">
              La licitud del tratamiento está basada en el artículo 6.1.b) del RGPD (ejecución de un contrato)
              y 6.1.c) del RGPD (cumplimiento de una obligación legal). El plazo de conservación oscila entre
              un mínimo de 4 años y un máximo de 10 años según el tipo de documento.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">2. Proveedores</h3>
            <p className="text-zinc-600 mb-4">
              Los datos personales del firmante del contrato, así como de las personas que participen en la
              prestación del servicio, serán tratados por la organización. La base jurídica es la relación
              contractual, para la formalización y ejecución del mismo.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">3. Redes Sociales</h3>
            <p className="text-zinc-600 mb-4">
              La organización cuenta con diferentes perfiles en redes sociales para dar a conocer sus actividades
              e interactuar con los usuarios. Los usuarios que decidan voluntariamente seguir o ser amigos de
              la organización, manifiestan su consentimiento para el tratamiento de sus datos personales.
            </p>
            <p className="text-zinc-600 mb-4">
              Recomendamos revise la configuración de privacidad de la red social correspondiente:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 mb-4">
              <li><a href="https://twitter.com/es/privacy" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Twitter</a></li>
              <li><a href="https://es-es.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Facebook</a></li>
              <li><a href="https://es-es.facebook.com/help/instagram/519522125107875" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">Instagram</a></li>
              <li><a href="https://es.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">LinkedIn</a></li>
              <li><a href="https://www.youtube.com/intl/es/about/policies/#community-guidelines" target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">YouTube</a></li>
            </ul>

            <h3 className="text-xl font-bold text-zinc-900 mt-6 mb-3">4. Correo Electrónico</h3>
            <p className="text-zinc-600 mb-4">
              Los datos personales que tratemos consecuencia de la recepción y/o intercambio de correos electrónicos,
              se tratarán con la finalidad de atender y dar respuesta a su petición de información o consulta,
              para mantener los contactos comerciales o profesionales y relaciones que se produzcan como consecuencia
              de la misma, o para el mantenimiento de una relación contractual.
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
