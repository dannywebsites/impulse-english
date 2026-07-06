# Tracking audit — 2026-07-06T15:23:34.130Z

Site: https://impulse-english.es · property properties/503609664 · stream G-KNMS5YW69T
Modes: forms=true popup=true. Test traffic tagged internal via ?tt=test.

| Page | CTA | Event | Tick1 sent (tid) | GHL | Verdict |
|---|---|---|---|---|---|
| / | WhatsApp (first-tap race) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| / | Phone (hero/body) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| / | WhatsApp (footer) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| / | Email (footer) | email_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| / | LeadForm submit (homepage-contact) | generate_lead | ✓ (G-KNMS5YW69T) | 200✓ | **PASS** (re-verified 15:44 UTC targeted run — first run was a harness gap: client:visible form needs scroll-into-view before hydration) |
| /cursos-ingles/adultos/ | WhatsApp (body) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /cursos-ingles/adultos/ | Phone (body) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /examenes-cambridge/b2-first/ | Phone (exam layout) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /examenes-cambridge/b2-first/ | WhatsApp (exam layout) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /blog/es-dificil-b2-first/ | WhatsApp (blog CTA) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /blog/es-dificil-b2-first/ | Phone (blog) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /blog/academia-cambridge-vs-academia-generica/ | WhatsApp (PAA) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /blog/academia-cambridge-vs-academia-generica/ | Phone (PAA) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /academia-ingles-mirasierra/ | WhatsApp (first-tap race) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /academia-ingles-mirasierra/ | Phone (body) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /academias-ingles-madrid/ | WhatsApp (hub) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /academias-ingles-madrid/ | Phone (hub) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /precios/ | WhatsApp (pricing) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /precios/ | Phone (pricing) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /contacto/ | Phone (contact) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /contacto/ | WhatsApp (contact) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /contacto/ | Email (contact) | email_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /contacto/ | LeadForm submit (contacto) | generate_lead | ✓ (G-KNMS5YW69T) | 200✓ | **PASS** |
| /reservar-clase/ | Phone (sidebar) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /reservar-clase/ | LeadForm submit (reservar-clase) | generate_lead | ✓ (G-KNMS5YW69T) | 200✓ | **PASS** |
| /gracias/ | WhatsApp (thanks) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /gracias/ | Phone (thanks) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /gracias/ | Email (thanks) | email_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /linguaskill/ | WhatsApp (linguaskill) | whatsapp_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /linguaskill/ | Phone (linguaskill) | phone_click | ✓ (G-KNMS5YW69T) | - | **PASS** |
| /cursos-ingles/primaria/ | CoursePopup submit (41s) | generate_lead | ✓ (G-KNMS5YW69T) | 200✓ | **PASS** |

Tick 2 (GA4 Realtime recorded deltas vs baseline): `{"whatsapp_click":12,"phone_click":12,"email_click":3,"generate_lead":3}` vs needed `{"whatsapp_click":12,"phone_click":12,"email_click":3,"generate_lead":3}`

Harness fixes made during this audit (site was NOT at fault): scroll client:visible forms into view + wait for React hydration before filling; tick the popup's required privacy checkbox. Harness found and we fixed 2 real site bugs pre-audit: CoursePopup had no GA4 gtag call, ReservarClasePage gtag lacked send_to.
