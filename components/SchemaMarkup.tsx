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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "City Plaza Real Estate",
    "url": "https://cityplazare.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://cityplazare.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "City Plaza Real Estate",
    "image": "https://cityplazare.com/images/og-image.jpg",
    "@id": "https://cityplazare.com",
    "url": "https://cityplazare.com",
    "telephone": "+971529009133",
    "priceRange": "AED 750,000 - AED 10,000,000+",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, Gate 25, Aljazeera Stadium",
      "addressLocality": "Abu Dhabi",
      "addressRegion": "Abu Dhabi",
      "postalCode": "",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.4539,
      "longitude": 54.3773
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/cityplazare",
      "https://www.instagram.com/cityplazare",
      "https://www.linkedin.com/company/cityplazare"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "UAE Golden Visa Property Investment",
    "description": "Premium real estate properties in Abu Dhabi and Dubai eligible for UAE Golden Visa. Off-plan and ready properties with flexible payment plans.",
    "brand": {
      "@type": "Brand",
      "name": "City Plaza Real Estate"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AED",
      "lowPrice": "750000",
      "highPrice": "10000000",
      "offerCount": "500",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "City Plaza Real Estate"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the UAE Golden Visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The UAE Golden Visa is a long-term residency visa that allows investors and their families to live, work, and study in the UAE. Property investors can qualify by purchasing real estate worth AED 2 million or more."
        }
      },
      {
        "@type": "Question",
        "name": "Can foreigners buy property in UAE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, foreigners can buy freehold properties in designated areas of Dubai and Abu Dhabi with 100% ownership rights. No restrictions apply to nationality for freehold properties."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of investing in UAE real estate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Benefits include: 0% property tax, 0% capital gains tax, high rental yields (5-8%), Golden Visa eligibility, 100% ownership, stable economy, and strategic location for international business."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum investment for Golden Visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum property investment for UAE Golden Visa eligibility is AED 2 million (approximately USD 545,000). This can be a single property or multiple properties totaling AED 2 million."
        }
      },
      {
        "@type": "Question",
        "name": "Are there property taxes in UAE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the UAE has no property tax, no capital gains tax, and no inheritance tax. This makes it one of the most tax-efficient real estate markets globally."
        }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
