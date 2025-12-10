import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  initial: string;
  location: string;
  country: string;
  flag: string;
  property: string;
  roi: string;
  investment: string;
  timeframe: string;
  rating: number;
  avatar: string;
}

export default function ROITestimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "City Plaza made my Golden Visa property purchase seamless. Professional guidance from start to finish, with complete transparency on costs and timelines. The rental income started flowing within 2 months!",
      author: "Daniel K.",
      initial: "D",
      location: "London, UK",
      country: "UK",
      flag: "gb",
      property: "Golden Visa Property, Abu Dhabi",
      roi: "14%",
      investment: "AED 2.5M",
      timeframe: "12 months",
      rating: 5,
      avatar: "/avatars/daniel.jpg"
    },
    {
      quote: "Found the perfect investment property with consistent returns. The team understood my goals and delivered exactly what I needed. My property value increased by 18% in just one year!",
      author: "Aisha M.",
      initial: "A",
      location: "Lagos, Nigeria",
      country: "Nigeria",
      flag: "ng",
      property: "Rental Income Property, Dubai",
      roi: "9.2%",
      investment: "AED 1.8M",
      timeframe: "8 months",
      rating: 5,
      avatar: "/avatars/aisha.jpg"
    },
    {
      quote: "Exceptional service and market knowledge. They helped me secure an off-plan unit before public launch at 15% below market rate. Already received multiple offers above my purchase price!",
      author: "Miguel R.",
      initial: "M",
      location: "Madrid, Spain",
      country: "Spain",
      flag: "es",
      property: "Off-Plan Development, Dubai Marina",
      roi: "12.5%",
      investment: "AED 3.2M",
      timeframe: "6 months",
      rating: 5,
      avatar: "/avatars/miguel.jpg"
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9/5 Average Rating · 500+ Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Real Results from Real Investors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our clients are building wealth and securing their future with UAE real estate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-accent transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* ROI Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {testimonial.roi} ROI
                </div>
              </div>

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

              {/* Investment Stats */}
              <div className="bg-gradient-to-r from-accent/5 to-gold/5 rounded-xl p-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Investment</p>
                    <p className="font-bold text-navy">{testimonial.investment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Timeframe</p>
                    <p className="font-bold text-navy">{testimonial.timeframe}</p>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="relative">
                  {/* Client Photo */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg">
                    <Image 
                      src={testimonial.avatar}
                      alt={`${testimonial.author} - UAE property investor from ${testimonial.country}`}
                      width={56}
                      height={56}
                      quality={95}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  {/* Country Flag */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full border-2 border-white overflow-hidden shadow-md bg-white">
                    <Image 
                      src={`/flags/${testimonial.flag}.svg`}
                      alt={`${testimonial.country} flag - International UAE property investor`}
                      width={28}
                      height={28}
                      quality={95}
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <p className="font-bold text-navy">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-accent font-semibold mt-1">{testimonial.property}</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-4 flex items-center gap-2 text-green-600 text-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Verified Investment</span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Stats */}
        <div className="bg-gradient-to-r from-accent to-gold rounded-2xl p-8 text-white">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">11.9%</div>
              <p className="text-white/90">Average ROI</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">AED 2.5M</div>
              <p className="text-white/90">Avg. Investment</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8.7 months</div>
              <p className="text-white/90">Avg. Time to ROI</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-white/90">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-white rounded-2xl shadow-md border border-gray-200">
            <div className="flex -space-x-3">
              {[
                '/avatars/person1.jpg',
                '/avatars/person2.jpg',
                '/avatars/person3.jpg',
                '/avatars/person4.jpg',
                '/avatars/person5.jpg'
              ].map((avatar, i) => (
                <div key={i} className="w-12 h-12 rounded-full overflow-hidden border-3 border-white shadow-lg">
                  <Image 
                    src={avatar}
                    alt={`Investor ${i + 1}`}
                    width={48}
                    quality={95}
                    height={48}
                    className="object-cover w-full h-full"
                  />
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
