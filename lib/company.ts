// Canonical production URL — used for SEO (metadata, sitemap, Open Graph,
// structured data). Update if the live domain differs.
export const siteUrl = "https://avrixodigitals.com";

export const companyContact = {
  email: "info@avrixodigitals.com",
  mailto: "mailto:info@avrixodigitals.com",
  phoneDisplay: "+92 312 4180123",
  phoneHref: "tel:+923124180123",
  location: "Remote-first, serving global teams",
} as const;

// Booking link for the /schedule page. Paste a Cal.com or Calendly URL
// (e.g. "https://cal.com/avrixo/30min") and the schedule page will embed it.
// While empty, the schedule page routes visitors to the contact form instead,
// so the "Book a Call" buttons are never a dead end.
export const schedulingUrl = "";

// Contact form delivery. This site is a static export (no backend), so the
// form posts to FormSubmit (https://formsubmit.co) — a free service that emails
// every submission to `formRecipient`. No API key is required.
//
// ONE-TIME ACTIVATION: the first submission sent to a new address triggers a
// confirmation email from FormSubmit to `formRecipient`. Open that email once
// and click "Activate Form" — after that, every submission is delivered
// automatically to this inbox. (Do a test submit yourself, then activate.)
export const formRecipient = "team.avrixodigitals@gmail.com";

// Social profiles. Leave a value empty ("") and the footer will NOT render
// that icon — so we never link to a bare domain or a profile that doesn't
// exist yet. Fill these in with real Avrixo profile URLs when they're live.
export const companySocials = {
  linkedin: "",
  facebook: "",
  instagram: "",
} as const;
