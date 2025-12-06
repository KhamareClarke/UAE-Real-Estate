export default function TrustedDevelopers() {
  const developers = ['Aldar', 'Reportage', 'Bloom', 'Modon', 'Binghatti'];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-navy mb-10">
          Trusted Developers
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {developers.map((developer) => (
            <div
              key={developer}
              className="px-6 py-3 border border-gray-300 rounded-full bg-white text-gray-700 font-medium text-sm sm:text-base"
            >
              {developer}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
