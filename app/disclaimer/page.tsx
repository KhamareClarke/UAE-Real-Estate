import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer | City Plaza Real Estate',
  description: 'Important disclaimers and notices regarding City Plaza Real Estate services and information.',
};

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-navy text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-accent-light mb-6 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Disclaimer</h1>
          <p className="text-gray-400 text-lg">Last updated: December 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">General Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The information provided on the City Plaza Real Estate website and through our services is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on our website for any purpose.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any reliance you place on such information is strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Investment Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-red-600">IMPORTANT:</strong> Real estate investment involves substantial risk and is not suitable for all investors. Past performance is not indicative of future results.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>No Guaranteed Returns:</strong> We do not guarantee any specific investment returns, rental yields, or property appreciation. Market conditions can fluctuate significantly.</li>
              <li><strong>Market Risks:</strong> Property values can go down as well as up. You may not recover your initial investment.</li>
              <li><strong>Liquidity Risk:</strong> Real estate is typically an illiquid investment. You may not be able to sell your property quickly or at your desired price.</li>
              <li><strong>Currency Risk:</strong> For international investors, exchange rate fluctuations may affect your investment value.</li>
              <li><strong>Rental Income:</strong> Projected rental yields are estimates only and not guaranteed. Actual rental income may vary based on market demand, property condition, and other factors.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              <strong>Professional Advice Required:</strong> You should consult with qualified independent financial, legal, and tax advisors before making any investment decision. City Plaza Real Estate does not provide financial, legal, or tax advice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Golden Visa Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Information regarding UAE Golden Visa eligibility is provided for general guidance only and is subject to change based on UAE government regulations.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>No Guarantee:</strong> We do not guarantee Golden Visa approval. Visa decisions are made solely by UAE immigration authorities.</li>
              <li><strong>Eligibility Criteria:</strong> Golden Visa requirements, including minimum property values and eligibility criteria, are subject to change by the UAE government without notice.</li>
              <li><strong>Application Process:</strong> The visa application process, timelines, and requirements are controlled by UAE government authorities, not by City Plaza Real Estate.</li>
              <li><strong>Independent Verification:</strong> You should verify all visa-related information with official UAE government sources and immigration consultants.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              City Plaza Real Estate acts only as a real estate broker and does not provide immigration or visa services. We recommend consulting with licensed immigration advisors for visa-related matters.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Property Information Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Property listings, descriptions, images, floor plans, and specifications are provided by developers and third parties. While we make reasonable efforts to ensure accuracy:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Subject to Change:</strong> All property information, prices, availability, and specifications are subject to change without notice.</li>
              <li><strong>Renderings vs. Reality:</strong> Images, renderings, and virtual tours may not accurately represent the final delivered property. Actual finishes, layouts, and views may differ.</li>
              <li><strong>Off-Plan Properties:</strong> For properties under construction, completion dates are estimates provided by developers and may be subject to delays.</li>
              <li><strong>Measurements:</strong> All property measurements are approximate and should be independently verified.</li>
              <li><strong>Amenities:</strong> Promised amenities and facilities are subject to developer delivery and may change during construction.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We strongly recommend conducting your own due diligence, property inspections, and independent verification before making any purchase decision.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Developer Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              City Plaza Real Estate acts as an independent broker and is not responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Developer delays, project cancellations, or modifications</li>
              <li>Quality of construction or finishing</li>
              <li>Developer financial stability or solvency</li>
              <li>Handover delays or disputes with developers</li>
              <li>Developer warranty claims or after-sales service</li>
              <li>Changes to project specifications or amenities by developers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              All contractual obligations regarding property purchase are between you and the developer. We recommend reviewing all developer contracts with a qualified legal advisor.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Third-Party Links Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites, including developer websites, financial institutions, and service providers. These links are provided for your convenience only.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have no control over the content, privacy policies, or practices of third-party websites and assume no responsibility for them. We do not endorse or make any representations about third-party websites or their content. You access third-party websites at your own risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">No Professional Relationship</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The information and services provided on our website do not create a professional relationship between you and City Plaza Real Estate until a formal written agreement is executed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Initial consultations, property viewings, and information provided are for exploratory purposes only and do not constitute professional advice or create any obligations on either party.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Regulatory Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              City Plaza Real Estate operates under RERA License #1189 and complies with UAE real estate regulations. However:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Real estate regulations are subject to change by UAE authorities</li>
              <li>We are not responsible for changes in laws, regulations, or government policies</li>
              <li>You are responsible for understanding and complying with all applicable laws and regulations</li>
              <li>Foreign ownership restrictions may apply to certain properties and areas</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Website Availability</h2>
            <p className="text-gray-700 leading-relaxed">
              We make no warranty that our website will be available at all times or that it will be free from errors, viruses, or other harmful components. We reserve the right to modify, suspend, or discontinue any aspect of our website at any time without notice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, City Plaza Real Estate, its directors, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Use or inability to use our website or services</li>
              <li>Reliance on information provided on our website</li>
              <li>Investment decisions made based on our recommendations</li>
              <li>Property market fluctuations or economic conditions</li>
              <li>Developer actions or omissions</li>
              <li>Changes in UAE laws, regulations, or government policies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed">
              This disclaimer is governed by the laws of the United Arab Emirates. Any disputes arising from the use of our website or services shall be subject to the exclusive jurisdiction of the courts of Abu Dhabi, UAE.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this disclaimer, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-gray-700 mb-2"><strong>City Plaza Real Estate</strong></p>
              <p className="text-gray-700 mb-2">RERA License #1189</p>
              <p className="text-gray-700 mb-2">3rd Floor, Gate 25, Aljazeera Stadium</p>
              <p className="text-gray-700 mb-2">Abu Dhabi, United Arab Emirates</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:Khadijat.omosumi@cityplazare.com" className="text-accent hover:underline">Khadijat.omosumi@cityplazare.com</a></p>
              <p className="text-gray-700 mb-2">Phone: <a href="tel:+971529009133" className="text-accent hover:underline">+971 52 900 9133</a></p>
              <p className="text-gray-700">WhatsApp: <a href="https://wa.me/971529009133" className="text-accent hover:underline">+971 52 900 9133</a></p>
            </div>
          </section>

          {/* Back to Home Button */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-gold hover:from-accent-dark hover:to-gold-dark text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
