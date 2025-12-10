'use client';

export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Share your goals',
      description: 'Tell us your budget, timeline, and residency priorities.',
    },
    {
      number: 2,
      title: 'Review curated options',
      description: 'Receive a shortlist of properties that fit your profile.',
    },
    {
      number: 3,
      title: 'Secure your unit',
      description: 'We guide you through reservation, paperwork, and next steps.',
    },
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy mb-12">
          How Your Investment Journey Works
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
            >
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToForm}
            className="bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-8 rounded-lg transition duration-200"
          >
            Start My Investment Roadmap
          </button>
        </div>
      </div>
    </section>
  );
}
