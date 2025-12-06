export default function EnhancedReviews() {
  const testimonials = [
    {
      quote: 'City Plaza made my Golden Visa property purchase seamless. Professional guidance from start to finish, with complete transparency on costs and timelines.',
      author: 'Daniel K.',
      location: 'London, UK',
      property: 'Golden Visa Property, Abu Dhabi',
      rating: 5,
      avatar: 'D',
    },
    {
      quote: 'Found the perfect investment property with 9% ROI. The team understood my goals and delivered exactly what I needed. Highly recommend for serious investors.',
      author: 'Aisha M.',
      location: 'Lagos, Nigeria',
      property: 'Rental Income Property, Dubai',
      rating: 5,
      avatar: 'A',
    },
    {
      quote: 'Exceptional service and market knowledge. They helped me secure an off-plan unit before public launch. The entire process was smooth and professional.',
      author: 'Miguel R.',
      location: 'Madrid, Spain',
      property: 'Off-Plan Development, Dubai Marina',
      rating: 5,
      avatar: 'M',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9/5 Average Rating
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Trusted by International Investors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join 500+ satisfied clients who have successfully invested in UAE property through City Plaza
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-accent transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-navy">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-accent font-semibold mt-1">{testimonial.property}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white rounded-2xl shadow-md border border-gray-200">
            <div className="flex -space-x-2">
              {['D', 'A', 'M', 'S', 'J'].map((letter, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-gold border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  {letter}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-navy">500+ Happy Investors</p>
              <p className="text-sm text-gray-600">From 45+ countries worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
