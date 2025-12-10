import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | City Plaza Real Estate',
  description: 'Terms and Conditions for using City Plaza Real Estate services and website.',
};

export default function TermsAndConditions() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-gray-400 text-lg">Last updated: December 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the City Plaza Real Estate website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms & Conditions, please do not use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms & Conditions apply to all visitors, users, and others who access or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">2. Use of Services</h2>
            
            <h3 className="text-xl font-semibold text-navy mb-3">2.1 Eligibility</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this age requirement.
            </p>

            <h3 className="text-xl font-semibold text-navy mb-3">2.2 Account Registration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3">2.3 Prohibited Uses</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to use our services to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Transmit harmful or malicious code</li>
              <li>Engage in fraudulent activities</li>
              <li>Harass, abuse, or harm others</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">3. Real Estate Services</h2>
            
            <h3 className="text-xl font-semibold text-navy mb-3">3.1 Brokerage Services</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              City Plaza Real Estate is a RERA-licensed real estate brokerage (License #1189). We provide:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Property search and selection assistance</li>
              <li>Investment consultation and guidance</li>
              <li>Transaction facilitation and documentation support</li>
              <li>Golden Visa eligibility assessment</li>
              <li>Property management services (where applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3">3.2 Property Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive to provide accurate and up-to-date property information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Property details, prices, and availability are subject to change without notice</li>
              <li>Information is provided by developers and third parties</li>
              <li>We recommend independent verification of all property details</li>
              <li>Images and renderings may not reflect the final product</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3">3.3 Investment Disclaimers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important:</strong> Real estate investment carries risks. We do not guarantee:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Specific investment returns or rental yields</li>
              <li>Property value appreciation</li>
              <li>Golden Visa approval (subject to UAE government regulations)</li>
              <li>Completion timelines for off-plan properties</li>
              <li>Future market conditions or demand</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You should consult with qualified legal, financial, and tax advisors before making any investment decisions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">4. Fees and Payments</h2>
            
            <h3 className="text-xl font-semibold text-navy mb-3">4.1 Commission Structure</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our standard commission is 2% of the property purchase price, typically paid by the seller or developer. Additional fees may apply for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Property management services (5% of annual rent)</li>
              <li>Specialized consultation services</li>
              <li>Document processing and legal assistance</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3">4.2 Government Fees</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Property transactions in the UAE incur government fees, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Dubai Land Department (DLD) transfer fee: 4% of property value</li>
              <li>Mortgage registration fees (if applicable)</li>
              <li>Trustee office fees</li>
              <li>NOC (No Objection Certificate) fees</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These fees are paid directly to the relevant authorities and are not included in our commission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The content on our website, including text, graphics, logos, images, and software, is the property of City Plaza Real Estate or its content suppliers and is protected by copyright and intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, City Plaza Real Estate shall not be liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Any indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, or data</li>
              <li>Property value fluctuations or market changes</li>
              <li>Developer delays or project cancellations</li>
              <li>Changes in UAE immigration or visa regulations</li>
              <li>Third-party actions or omissions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our total liability shall not exceed the amount of commission paid to us for the relevant transaction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">7. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify and hold harmless City Plaza Real Estate, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these Terms & Conditions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate or suspend your access to our services immediately, without prior notice, for any reason, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Violation of these Terms & Conditions</li>
              <li>Fraudulent or illegal activities</li>
              <li>Provision of false or misleading information</li>
              <li>Failure to pay fees or commissions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms & Conditions shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Abu Dhabi, UAE.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms & Conditions at any time. We will notify you of any changes by posting the new terms on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
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
