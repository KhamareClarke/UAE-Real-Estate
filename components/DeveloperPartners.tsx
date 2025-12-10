import Image from 'next/image';

export default function DeveloperPartners() {
  const developers = [
    { name: 'Aldar', logo: '/logos/aldar.png' },
    { name: 'Reportage', logo: '/logos/reportage.png' },
    { name: 'Bloom', logo: '/logos/bloom.png' },
    { name: 'Modon', logo: '/logos/modon.png' },
    { name: 'SAAS Properties', logo: '/logos/saas.png' },
    { name: 'Radiant Real Estate', logo: '/logos/radiant.png' },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy mb-6">
          Trusted Developers
        </h2>
        <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-12">
          {developers.map((developer) => (
            <div
              key={developer.name}
              className="flex flex-col items-center group"
            >
              {/* Circle Logo Container */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white border-2 border-gray-300 rounded-full p-4 hover:border-accent hover:shadow-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center overflow-hidden">
                <Image
                  src={developer.logo}
                  alt={`${developer.name} logo`}
                  fill
                  quality={95}
                  className="object-contain p-3"
                  sizes="(max-width: 640px) 96px, 112px"
                />
              </div>
              {/* Company Name */}
              <p className="mt-3 text-sm sm:text-base font-semibold text-gray-700 text-center group-hover:text-accent transition-colors">
                {developer.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
