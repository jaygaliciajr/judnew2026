import { siteContent } from "@/content/site";
import { SITE_URL } from "@/lib/constants";
import { faqItems } from "@/content/faq";

export function getProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteContent.name,
    url: SITE_URL,
    email: siteContent.email,
    telephone: siteContent.phone,
    areaServed: [
      "Philippines",
      "Cavite",
      "Laguna",
      "Antipolo",
      "Cebu",
      "Makati",
      "Bacolod",
      "General Santos",
      "Iloilo",
      "Boracay",
      "Australia",
      "Canada",
      "Singapore",
      "Japan",
      "Israel",
      "Malaysia",
      "United States"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "PH"
    },
    description: siteContent.description,
    serviceType: [
      "Software solutions",
      "Website development",
      "Mobile app development",
      "Web hosting",
      "SEO services",
      "Website maintenance"
    ]
  };
}

export function getFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
