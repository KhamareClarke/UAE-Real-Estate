export default function SEOSchema() {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "City Plaza Real Estate",
    "description": "RERA-licensed real estate brokerage specializing in UAE property investment and Golden Visa services in Dubai and Abu Dhabi",
    "url": "https://cityplazare.com",
    "logo": "https://cityplazare.com/logo.png",
    "telephone": "+971529009133",
    "email": "Khadijat.omosumi@cityplazare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, Gate 25, Aljazeera Stadium",
      "addressLocality": "Abu Dhabi",
      "addressCountry": "AE"
    },
    "areaServed": ["Dubai", "Abu Dhabi", "UAE"],
    "priceRange": "AED 500,000 - AED 10,000,000",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    },
    "sameAs": [
      "https://www.facebook.com/cityplazare",
      "https://www.instagram.com/cityplazare",
      "https://www.linkedin.com/company/cityplazare",
      "https://www.youtube.com/cityplazare"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ]
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://cityplazare.com/#localbusiness",
    "name": "City Plaza Real Estate",
    "image": "https://cityplazare.com/logo.png",
    "telephone": "+971529009133",
    "email": "Khadijat.omosumi@cityplazare.com",
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
      "latitude": "24.4539",
      "longitude": "54.3773"
    },
    "url": "https://cityplazare.com",
    "priceRange": "AED 500,000 - AED 10,000,000",
    "paymentAccepted": "Cash, Bank Transfer, Mortgage",
    "currenciesAccepted": "AED, USD, EUR, GBP"
  };

  // Breadcrumb Schema
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
        "name": "UAE Real Estate Investment",
        "item": "https://cityplazare.com/#properties"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Golden Visa Properties",
        "item": "https://cityplazare.com/#golden-visa"
      }
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://cityplazare.com/#website",
    "url": "https://cityplazare.com",
    "name": "City Plaza Real Estate",
    "description": "UAE Real Estate Investment & Golden Visa Property Specialists in Dubai and Abu Dhabi",
    "publisher": {
      "@id": "https://cityplazare.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://cityplazare.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "RealEstateAgent",
      "name": "City Plaza Real Estate"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Daniel K."
    },
    "reviewBody": "City Plaza made my Golden Visa property purchase seamless. Professional guidance from start to finish, with complete transparency on costs and timelines."
  };

  // Product Schema for Golden Visa Service
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "UAE Golden Visa Property Investment Package",
    "description": "Secure your UAE Golden Visa through strategic property investment with expert guidance and guaranteed ROI",
    "brand": {
      "@type": "Brand",
      "name": "City Plaza Real Estate"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AED",
      "lowPrice": "2000000",
      "highPrice": "10000000",
      "offerCount": "50"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
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
      "name": "UAE Property Investment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Golden Visa Property Investment",
            "description": "Secure UAE Golden Visa through property investment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Off-Plan Property Investment",
            "description": "Pre-launch property investment opportunities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Property Management Services",
            "description": "Full property management for UAE real estate"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long until I start earning rental income from UAE property?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most properties start generating rental income within 2-3 months of purchase completion. For off-plan properties, rental income typically begins once the property is handed over."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum investment for UAE Golden Visa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum property investment for UAE Golden Visa is AED 2 million for a 10-year visa."
        }
      },
      {
        "@type": "Question",
        "name": "Can I invest in UAE real estate from abroad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, foreign investors can purchase property in designated freehold areas in Dubai and Abu Dhabi. The entire process can be completed remotely with proper documentation."
        }
      },
      {
        "@type": "Question",
        "name": "What are typical ROI rates in Dubai and Abu Dhabi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typical ROI rates range from 6-8% for ready properties and 8-14% for off-plan properties in prime locations."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
