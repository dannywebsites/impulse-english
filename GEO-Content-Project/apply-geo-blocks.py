#!/usr/bin/env python3
"""
Inject the four missing GEO blocks into a barrio page, in the
/prueba-de-nivel-ingles/ design system.

Handles the parts that are IDENTICAL across pages (JP bio, price table, the
conversion block shell) and the parts that vary only by a named parameter
(case study, proximity line, reviews). The genuinely per-barrio content -
eyebrow, h2, answer capsule, the three route cards, the footnote, the FAQs -
is hand-written per page. That split is deliberate: mechanising the local
content is exactly how you get a duplicate cluster.

Usage:
  python3 apply-geo-blocks.py <PageFile.tsx> --barrio "Tetuán" --slug tetuan \
      --proximity "A 8 minutos en el bus 147 desde Tetuán" --case sergio|daniel|josmary
"""
import re, sys, os, argparse

UBIC = ("/Users/danny/Desktop/backup website Impuls Englisch /"
        "March-Impulse-Web-e7ad8740054b4e468e95bc81e5e4c79f17b98c97/pages/ubicaciones")

# ---------------------------------------------------------------- JP bio
def jp_section(barrio, hook):
    return f'''
      {{/* Quien da la clase. Senal E-E-A-T: persona con nombre, no "nuestro equipo". */}}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Quién te la da</span>
            <h2 className="t-h2 text-zinc-900 mb-5">La clase te la da JP, no "nuestro equipo"</h2>
            <div className="rule"></div>
          </div>
          <div className="grid md:grid-cols-[300px_1fr] gap-10 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-panel">
              <img
                src="/images/academy/jp-director-estudios.webp"
                alt="JP, director de estudios de Impulse English Academy, la academia de inglés más cercana a {barrio}"
                className="w-full h-full object-cover"
                loading="lazy"
                width={{900}}
                height={{1200}}
              />
            </div>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>{hook}</p>
              <p>
                <strong className="text-zinc-900">JP</strong> es director de estudios y cofundador.
                Lleva <strong className="text-zinc-900">más de 10 años enseñando inglés</strong> y
                vivió 10 años en Irlanda antes de instalarse en Madrid.
              </p>
              <p>
                Es quien dirige el día a día académico, quien hace tu prueba de nivel gratuita de
                25 minutos y quien contesta el WhatsApp: cuando escribes al 604 910 611, te
                responde él. No un formulario ni un centro de llamadas.
              </p>
              <p>
                Está especializado en exámenes Cambridge y en adquisición temprana del idioma, y
                aparece por su nombre en buena parte de nuestras 180 reseñas. Junto a Danny
                Fitzpatrick, cofundador, da clase en persona.
              </p>
              <a href="/nuestro-equipo/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
                Conoce al equipo completo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
'''

# ---------------------------------------------------------------- case studies
CASES = {
 "daniel": dict(
   name="Daniel de la Peña", stat1="18 meses", stat1l="con nosotros",
   stat2="Su objetivo", stat2l="trabajar en un país de habla inglesa",
   stat3="Conseguido", stat3l="hoy es profesor y da inglés en primaria a jornada completa",
   body1='Daniel llegó con un objetivo concreto: acceder a oportunidades laborales en el extranjero, en países de habla inglesa. Estuvo con nosotros cerca de año y medio. En sus palabras, <em>"es algo que conseguí, así que desde ese punto de vista cumplió con mis expectativas"</em>.',
   body2='Lo que más valoró no fue el temario: <em>"cuando acudimos a una academia es encontrar un trato personalizado y sobre todo profesionalidad y compromiso para con tu proceso de aprendizaje y tu situación de partida"</em>. Hoy es profesor cualificado y enseña inglés en primaria a jornada completa.'),
 "sergio": dict(
   name="Sergio", stat1="30 años", stat1l="cuando dio el paso",
   stat2="4 entrevistas", stat2l="en sus primeros meses en Dublín",
   stat3="2 años", stat3l="viviendo y trabajando en Irlanda",
   body1='Sergio tenía el problema que tiene medio país: <em>"como todos los españoles, el inglés siempre ha sido una gran parte de nuestra educación. Sin embargo, siempre he tenido una gran carencia de confianza para hablar en inglés"</em>. La barrera del idioma le había impedido mudarse al extranjero durante años.',
   body2='Hoy lleva dos años en Dublín trabajando como analista y administrador de pólizas de seguro. <em>"Tanto Dani como JP han sido un gran apoyo para mí… gracias a ellos he podido ganar la confianza que realmente necesitaba"</em>. En sus primeros meses allí tuvo cuatro entrevistas con empresas distintas.'),
 "josmary": dict(
   name="Josmary", stat1="Desde septiembre", stat1l="en clases de noche",
   stat2="Nivel B1", stat2l="con JP",
   stat3="Un plan claro", stat3l="y la confianza para equivocarse",
   body1='Josmary entró, en sus palabras, <em>"con una situación un poco cacao"</em>: hablaba y entendía algo de inglés, pero tenía <em>"muchísimos vacíos de gramática, de vocabulario y de no saber en qué punto estaba"</em>. Va a clase por la noche, en el grupo de B1 con JP.',
   body2='Lo que más valora es la creatividad de su profesor y <em>"la confianza de equivocarnos"</em>. Lo que se lleva: <em>"he conseguido sentirme con más confianza, tener un plan claro de qué es lo que necesito mejorar, cómo hacerlo, las herramientas para hacerlo, y el apoyo de JP para ese camino"</em>.'),
}

def case_section(key, case_hook):
    c = CASES[key]
    return f'''
      {{/* Caso real: resultado concreto, con nombre y desenlace verificable. */}}
      <section className="section px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Un caso real</span>
            <h2 className="t-h2 text-zinc-900 mb-5">{c["name"]}</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 leading-relaxed mb-6 max-w-3xl">{case_hook}</p>
          <div className="card p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-6 text-center">
              <div><p className="t-h3 text-accent-blue">{c["stat1"]}</p><p className="t-small text-zinc-600">{c["stat1l"]}</p></div>
              <div><p className="t-h3 text-accent-blue">{c["stat2"]}</p><p className="t-small text-zinc-600">{c["stat2l"]}</p></div>
              <div><p className="t-h3 text-emerald-600">{c["stat3"]}</p><p className="t-small text-zinc-600">{c["stat3l"]}</p></div>
            </div>
            <p className="text-zinc-600 leading-relaxed mb-4">{c["body1"]}</p>
            <p className="text-zinc-600 leading-relaxed mb-6">{c["body2"]}</p>
            <a href="/testimonios/" className="text-accent-blue font-semibold hover:underline inline-flex items-center gap-1">
              Ver el vídeo y otros casos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
'''

# ---------------------------------------------------------------- prices
def price_section(barrio, price_hook):
    return f'''
      {{/* Precios visibles en pagina, no solo en schema. */}}
      <section className="section px-6 surface-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Precios</span>
            <h2 className="t-h2 text-zinc-900 mb-5">Cuánto cuesta, sin letra pequeña</h2>
            <div className="rule"></div>
          </div>
          <p className="text-zinc-600 mb-8">{price_hook}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-zinc-200">
                  <th className="py-3 pr-4 font-display text-xs uppercase tracking-wider text-zinc-500">Curso</th>
                  <th className="py-3 pr-4 font-display text-xs uppercase tracking-wider text-zinc-500">Edad</th>
                  <th className="py-3 font-display text-xs uppercase tracking-wider text-zinc-500">Precio</th>
                </tr>
              </thead>
              <tbody className="text-zinc-700">
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Infantil</td><td className="py-3 pr-4">2-5 años</td><td className="py-3">desde 64 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Primaria</td><td className="py-3 pr-4">6-12 años</td><td className="py-3">83 €/mes · 239 €/trimestre</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Secundaria</td><td className="py-3 pr-4">13-17 años</td><td className="py-3">desde 87 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Adultos</td><td className="py-3 pr-4">todos los niveles</td><td className="py-3">94 €/mes</td></tr>
                <tr className="border-b border-zinc-100"><td className="py-3 pr-4 font-medium">Clases particulares</td><td className="py-3 pr-4">todas las edades</td><td className="py-3">29 €/hora</td></tr>
                <tr><td className="py-3 pr-4 font-medium">Clases online</td><td className="py-3 pr-4">todas las edades</td><td className="py-3">29 €/hora</td></tr>
              </tbody>
            </table>
          </div>
          <p className="t-small text-zinc-500 mt-6">
            Aparte: <strong>matrícula 45 €</strong> y <strong>libro hasta 40 €</strong>, una sola
            vez. La cuota incluye las clases semanales, los simulacros Cambridge, el seguimiento
            personalizado y los recursos online. Hay descuento por pago trimestral y por familias
            con más de un hijo matriculado. Las tasas del examen oficial las fija Cambridge.
          </p>
        </div>
      </section>
'''

# ---------------------------------------------------------------- CTA block
def cta_section(slug, proximity):
    return f'''
      {{/* CTA: patron de conversion de Barrio del Pilar. `source` por barrio para GHL. */}}
      <section className="section-lead px-6 surface-alt">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="t-h2 text-zinc-900 mb-6">Pide Tu Prueba de Nivel</h2>
              <div className="space-y-4 mb-8">
                {{[
                  "Contáctanos por WhatsApp o teléfono",
                  "Prueba de nivel gratuita (25 minutos) con JP",
                  "Empieza tu transformación con el inglés"
                ].map((step, i) => (
                  <div key={{i}} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent-blue text-white rounded-full flex items-center justify-center font-bold shrink-0">{{i + 1}}</div>
                    <span className="text-zinc-700">{{step}}</span>
                  </div>
                ))}}
              </div>
              <p className="text-zinc-900 font-bold text-lg mb-4">{proximity}. Sin excusas.</p>
              <p className="text-zinc-600">{{NAP.fullAddress}}</p>
            </div>
            <div>
              <LeadForm
                title="Reserva Tu Prueba Gratuita"
                subtitle="Te contactamos en menos de 24h"
                ctaText="Reservar Ahora"
                source="{slug}"
                showPhone={{true}}
                showAge={{true}}
                showLevel={{true}}
                variant="refresh"
              />
            </div>
          </div>
        </div>
      </section>
'''

# ---------------------------------------------------------------- testimonials
TESTI_BLOCK = '''          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {localReviews.map((review, idx) => (
              <div key={idx} className="card p-7">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-700 mb-4 italic">"{review.text}"</p>
                <p className="text-zinc-900 font-semibold">{review.name}</p>
                <p className="text-zinc-500 text-sm">{review.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-zinc-600 mb-6">
              __TESTI_HOOK__
            </p>
            <a
              href={NAP.gbpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              Ver las 180 reseñas en Google
            </a>
          </div>'''


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("page")
    ap.add_argument("--barrio", required=True)
    ap.add_argument("--slug", required=True)
    ap.add_argument("--proximity", required=True)
    ap.add_argument("--case", required=True, choices=list(CASES))
    ap.add_argument("--jp-hook", required=True, help="barrio-specific sentence opening the JP bio")
    ap.add_argument("--price-hook", required=True, help="barrio-specific lead-in above the price table")
    ap.add_argument("--case-hook", required=True, help="barrio-specific framing for the case study")
    ap.add_argument("--testi-hook", required=True, help="barrio-specific line under the two reviews")
    a = ap.parse_args()

    path = a.page if os.path.sep in a.page else os.path.join(UBIC, a.page)
    s = open(path, encoding="utf-8").read()
    before = s

    # 1. testimonials -> real reviews.
    # Pages use several markup variants (grid-cols-1 md:grid-cols-3 / md:grid-cols-3,
    # map vars (t,i) / (testimonial,idx)). Match on the DATA - an inline array of
    # {name, text} literals feeding a .map - rather than on the wrapper classes.
    arr = re.search(r'\{\[\s*\n(?:[^\]]*?name:\s*"[^"]*"[^\]]*?)\]\.map\(\((\w+),\s*(\w+)\)\s*=>', s, re.S)
    if arr:
        item = arr.group(1)
        s = s[:arr.start()] + "{localReviews.map((review, idx) =>" + s[arr.end():]
        # rebind the field references inside the rendered card
        idxvar = arr.group(2)
        s = re.sub(r'\{%s\.(name|text|role)\}' % re.escape(item), r'{review.\1}', s)
        # the index variable is renamed too, so key={i} would dangle -> ReferenceError
        s = re.sub(r'key=\{%s\}' % re.escape(idxvar), 'key={idx}', s)
        # add the role line under the name if the variant lacks it
        s = s.replace('<p className="text-zinc-900 font-semibold">{review.name}</p>',
                      '<p className="text-zinc-900 font-semibold">{review.name}</p>\n                <p className="text-zinc-500 text-sm">{review.role}</p>', 1)

    # 2. kill the fabricated-claim leftovers anywhere they survive
    s = re.sub(r'\s*<p className="text-zinc-600 mb-6">\s*Más de \d+ familias[^<]*</p>', '', s)
    s = s.replace("174+ reseñas reales", "Ver las 180 reseñas en Google")
    s = re.sub(r'\b174\+? reseñas', '180 reseñas', s)

    # 3. inject the four blocks immediately before the gallery
    anchor = "      {/* Gallery Section - Photos at Bottom */}"
    if anchor in s:
        s = s.replace(anchor, jp_section(a.barrio, a.jp_hook) + case_section(a.case, a.case_hook)
                      + price_section(a.barrio, a.price_hook) + anchor, 1)

    # 4. bare LeadForm -> full conversion block
    s = re.sub(r'\n *<LeadForm variant="refresh" />\n', "\n" + cta_section(a.slug, a.proximity), s)

    # 5. retired offer + em dashes
    s = s.replace("prueba una clase gratis", "reserva tu prueba de nivel gratuita de 25 minutos")
    s = s.replace("—", ",").replace("–", "-")

    open(path, "w", encoding="utf-8").write(s)
    has_source = ('source="%s"' % a.slug) in s
    print("%s: changed=%s reviews=%s jp=%s case=%s prices=%s cta=%s emdash=%d" % (
        os.path.basename(path), s != before, "localReviews" in s,
        "jp-director-estudios" in s, CASES[a.case]["name"] in s,
        "29 €/hora" in s, has_source, s.count(chr(8212))))


if __name__ == "__main__":
    main()
