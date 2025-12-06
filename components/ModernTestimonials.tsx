'use client';

export default function ModernTestimonials() {
  const testimonials = [
    {
      quote: "City Plaza made my Golden Visa property purchase seamless. Professional guidance from start to finish, with complete transparency on costs and timelines. Highly recommended for international investors.",
      author: "Daniel K.",
      location: "London, UK",
      property: "Golden Visa Property, Abu Dhabi",
      rating: 5
    },
    {
      quote: "Found the perfect investment property with the team's expert guidance. They understood my goals and delivered exactly what I needed. The entire process was smooth and professional.",
      author: "Aisha M.",
      location: "Lagos, Nigeria",
      property: "Investment Property, Dubai",
      rating: 5
    },
    {
      quote: "Exceptional service and market knowledge. They helped me secure an off-plan unit with excellent terms. The team's expertise in UAE real estate is truly impressive.",
      author: "Miguel R.",
      location: "Madrid, Spain",
      property: "Off-Plan Development, Dubai Marina",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full text-accent font-bold text-sm mb-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              4.9/5 Average Rating · 500+ Success Stories
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-navy mb-6">
              Trusted by International Investors
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto font-medium">
              See how our clients are building wealth and securing their future with UAE real estate
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-gold/50 hover:shadow-2xl transition-all duration-300"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-navy/80 leading-relaxed mb-8 text-lg font-medium">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="pt-6 border-t-2 border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-black text-navy text-lg mb-1">{testimonial.author}</p>
                      <p className="text-sm text-navy/60 font-semibold mb-2">{testimonial.location}</p>
                      <p className="text-xs text-accent font-bold">{testimonial.property}</p>
                    </div>
                    <div className="bg-accent/10 p-3 rounded-full">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Stats */}
          <div className="mt-16 bg-gradient-to-r from-navy to-navy-900 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-5xl font-black text-accent mb-2">500+</p>
                <p className="text-white/80 font-semibold">Happy Investors</p>
              </div>
              <div>
                <p className="text-5xl font-black text-accent mb-2">45+</p>
                <p className="text-white/80 font-semibold">Countries</p>
              </div>
              <div>
                <p className="text-5xl font-black text-accent mb-2">98%</p>
                <p className="text-white/80 font-semibold">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-5xl font-black text-accent mb-2">15+</p>
                <p className="text-white/80 font-semibold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
