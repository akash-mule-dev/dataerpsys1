# Scrape Notes — dataerpsys.com

## Coverage
All 21 URLs returned 200 OK. No 404s encountered.

## Quality / Brand-Voice Observations

### Typos and oddities to FIX in Next.js rebuild
- "Submiit" — submit button on home / manufacturing / contact forms is misspelled. Fix to "Submit".
- "Subheadline" tag "0%" / "0+" appears in IT Services stats block — placeholder counter zeros (likely an unfilled odometer widget). Choose real numbers or remove.
- IT Services page has "Lorem ipsum" placeholder text in three numbered benefit sections — DO NOT carry over; replace with real copy.
- Application Development page ends with "At Lasta Technologies, we make sure that…" — "Lasta Technologies" appears to be leftover boilerplate from a template; should be "Data ERP Systems" / "DES".
- Oracle page uses heading "Scope of Staffing Solutions" inside the Oracle section — this heading was clearly copy-pasted from the Staffing page and is mis-applied. Rename to something like "Scope of Oracle Solutions" or "Our Oracle Capabilities".
- Mobile App Dev claims "preeminent Mobile App Development Company of India" — the rest of the brand reads as a global ERP/SAP shop. Tone-check before reusing verbatim.
- Pharmaceutical "Why Choose Us" block is ALL CAPS ("MEETS GMP", "STOCK MONITORING"…). Other industries use Title Case. Normalize to Title Case for consistency.

### Contradictions
- Home page metrics list contains both "Happy Clients" and "Happy Client" (duplicate). Likely a typo in the original counter widget — pick one label.
- SAP page says "14 years of experience" in two places (Implementation + Why Partner). Confirm with stakeholder before using.
- Oracle stats ("Nucleus Research market leader for 7 consecutive years", "$5B R&D", "430,000+ customers") describe Oracle Corp, not DES. Keep but frame as "About Oracle" not "About us".

### Things that don't fit the Stitch / Tailwind design well
- Many hero images are PNGs with "-removebg-preview" in the filename — they're transparent cut-outs of stock illustrations. Quality is low/inconsistent. Recommend replacing with on-brand imagery, or using Tailwind gradient/illustration alternatives.
- The site relies heavily on stock-photo placeholders (`MicrosoftTeams-image-*.png`, `istockphoto-*.png`, `favpng-*` filenames) — none are owned brand assets. Treat all image URLs as informational; do not hot-link in production.
- Logo is only a small 250x50 transparent PNG (`cropped-dataerpsys-cropped-transparent-final-250x50.png`). Will need an SVG/higher-res version for responsive headers.
- Several "Why Choose Us" lists across industry pages are nearly identical (Better Planning / Stock Monitoring / Complete Automation / Resource Utilization / Efficient Quality Checks / Supply Chain Processing). Consider one shared component with industry-specific overrides rather than duplicating.
- Performance Metrics on Consulting page (99%, 98%, 99%) and Staffing process metrics (SOLVE 99%, SOURCE 95% …) are unsourced; treat as decorative or remove.

### Missing / Sparse Pages
- Careers page lists no actual open roles — only a generic application form. Decide whether to keep the form, link to a careers ATS, or hide the page until roles exist.
- FAQ page has 16 Q&A pairs but no category grouping — Stitch design likely groups by topic (General ERP / SAP HANA / Implementation). Consider grouping these in the rebuild.
- Several heading rows had empty body text on the live site (e.g., "Recalibrating your ERP strategy" on SAP page, "Digital compliance and Collaboration" on Healthcare). They're left as headings only; new design should either fill them in or drop them.

### Contact info — confirmed consistent across all pages
- Address: Plot No 21, III Floor, Shakti Nagar Moosapet, Hyderabad - 500018 Telangana, INDIA
- Phone: (+91) 9848045513
- Email: info@dataerpsys.com
- Hours: Mon–Fri 09:00 AM – 06:00 PM (Sat/Sun closed)

### Navigation (for nav component)
Home, Services, Industries, Clients, About Us, Careers, FAQs, Contact Us, Privacy Policy, Cookie Policy, Terms of Use.
(No dedicated "About Us" page was in the scrape list — likely lives at /about-us/. Worth scraping separately if it's part of the rebuild.)

### Services hub vs IT Services hub
There are two parallel taxonomies on the site:
- `/it-services/` → SAP, Oracle, Mobile App Dev, Software Testing & QA
- `/services/` → Application Development, Application Support, Consulting, Offshore, Staffing
The "Application Development" item appears in BOTH hubs (listed under /it-services/ as a service, but only has a page under /services/). Resolve this IA overlap in the rebuild — recommend a single unified Services nav.
