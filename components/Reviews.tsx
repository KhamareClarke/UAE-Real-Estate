export default function Reviews() {
  const testimonials = [
    {
      quote: 'Professional guidance with transparency.',
      author: 'Daniel K., London',
    },
    {
      quote: 'Perfect match for my investment goals.',
      author: 'Aisha M., Lagos',
    },
    {
      quote: 'Smooth process and excellent service.',
      author: 'Miguel R., Madrid',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy mb-12">
          Client Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm"
            >
              <svg
                className="w-10 h-10 text-accent/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-sm text-gray-500 font-medium">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
