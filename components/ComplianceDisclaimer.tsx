'use client';

export default function ComplianceDisclaimer() {
  return (
    <section className="py-12 bg-sand border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/50 border border-gray-200 rounded-xl p-8">
            <h3 className="font-serif text-xl font-bold text-navy mb-4">Important Disclosures</h3>
            <div className="space-y-4 text-sm text-navy/70 leading-relaxed">
              <p>
                <strong className="text-navy">Investment Performance:</strong> Past performance is not indicative of future results. Returns vary based on location, property type, market conditions, and duration held. Historical performance examples are available upon request during consultation.
              </p>
              <p>
                <strong className="text-navy">Property Values:</strong> Real estate values can fluctuate based on market conditions, economic factors, and regulatory changes. All property investments carry inherent risks and should be carefully evaluated with professional guidance.
              </p>
              <p>
                <strong className="text-navy">Golden Visa Eligibility:</strong> Golden Visa requirements and processing times are subject to UAE government regulations and may change. Eligibility criteria, investment thresholds, and approval timelines should be verified with official government sources.
              </p>
              <p>
                <strong className="text-navy">Professional Advice:</strong> The information provided on this website is for general informational purposes only and does not constitute financial, legal, or tax advice. Prospective investors should consult with qualified professionals before making any investment decisions.
              </p>
              <p>
                <strong className="text-navy">Regulatory Compliance:</strong> City Plaza Real Estate is a RERA-licensed brokerage (License #1189) operating in full compliance with UAE real estate regulations. All transactions are conducted in accordance with applicable laws and regulations.
              </p>
              <p className="text-xs text-navy/60 mt-6 pt-6 border-t border-gray-200">
                © {new Date().getFullYear()} City Plaza Real Estate. All rights reserved. RERA License #1189. 
                This website and its contents are the property of City Plaza Real Estate and are protected by applicable copyright and intellectual property laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
