# Review allocation — one pass, no repeats anywhere on the site

19 verified real Google reviews. Khadija Ziyati excluded (names a teacher outside the
approved set). Each barrio page gets exactly 2. **No review may appear on two pages.**

| Page | Review 1 | Review 2 | Status |
|---|---|---|---|
| La Ventilla | Lucia Salmerón | Gonzalo Tarascón | ✅ LIVE |
| Tetuán | Cesar Seneca Tellechea Corral | Mª Del Espino Monedero García | queued |
| La Paz | Lidia Ramirez | Clara Sánchez | queued |
| Cuatro Torres | Karina Garcia | Víctor RC | queued |
| Plaza Castilla | María Comas | Anna Farney | queued |
| Montecarmelo | Marina Penerbosa | Jorge Martinez | queued |
| Mirasierra | María Jesús Zuazo Sahagún | Rosa E. | queued |
| Peñagrande | Gloria RM | Pepi Moral Ventura | queued |
| Barrio del Pilar | Yurisbeth Rivero Chirinos | Lorena AP | queued |
| **La Vaguada** | Felix Maria | **NONE LEFT** | ⛔ blocked |

**Pool exhausted after Barrio del Pilar.** 17 available, 16 allocated, 1 spare (Felix Maria).
La Vaguada and all 7 new pages need ~15 more reviews via the GBP API before they can ship.

## Allocation logic
Matched to each barrio's likely audience rather than assigned at random:
- Adult / career / commuter barrios (Tetuán, Cuatro Torres, Plaza Castilla) get the
  adult-learner and certification reviews.
- Family barrios (Montecarmelo, Mirasierra, Peñagrande, La Paz) get the parent reviews.
- Barrio del Pilar, the academy's own barrio and best performer, gets the two strongest
  human stories (Yurisbeth's emigration/adaptation story, Lorena's confidence arc).

## Case-study rotation (3 available, varied framing per page)
- **Daniel de la Peña** (18 months → qualified teacher, primary English full-time):
  Tetuán, Cuatro Torres, Peñagrande
- **Sergio** (30, Dublin, insurance analyst, 4 interviews in first months):
  Plaza Castilla, Mirasierra, Barrio del Pilar
- **Josmary** (B1 evening classes with JP, started September, confidence + clear plan):
  La Paz, Montecarmelo
Each page uses a different pull-quote and a barrio-relevant framing so no two pages carry
identical case-study text.
