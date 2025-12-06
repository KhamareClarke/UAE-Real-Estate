export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "City Plaza Real Estate",
    "description": "Premium UAE property investment brokerage specializing in Abu Dhabi and Dubai real estate with Golden Visa eligibility",
    "url": "https://cityplazare.com",
    "logo": "https://cityplazare.com/logo.png",
    "image": "https://cityplazare.com/og-image.jpg",
    "telephone": "+971529009133",
    "email": "Khadijat.omosumi@cityplazare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, Gate 25, Aljazeera Stadium",
      "addressLocality": "Abu Dhabi",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.4539",
      "longitude": "54.3773"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Abu Dhabi"
      },
      {
        "@type": "City",
        "name": "Dubai"
      }
    ],
    "priceRange": "AED 750,000 - AED 10,000,000+",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/cityplazare",
      "https://www.instagram.com/cityplazare",
      "https://www.linkedin.com/company/cityplazare"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Real Estate Investment Consultation",
    "provider": {
      "@type": "RealEstateAgent",
      "name": "City Plaza Real Estate"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UAE Property Investment Opportunities",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Golden Visa Property Investment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Off-Plan Property Investment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rental Income Properties"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cityplazare.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "UAE Property Investment",
        "item": "https://cityplazare.com/uae-property"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
