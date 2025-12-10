import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | City Plaza Real Estate',
  description: 'Learn about how City Plaza Real Estate uses cookies and similar tracking technologies.',
};

export default function CookiePolicy() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-gray-400 text-lg">Last updated: December 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies allow us to recognize your device and store some information about your preferences or past actions on our website, enabling us to provide you with a better user experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              City Plaza Real Estate uses cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Essential Website Functionality:</strong> To enable core website features and ensure proper operation</li>
              <li><strong>User Preferences:</strong> To remember your settings, language preferences, and choices</li>
              <li><strong>Analytics and Performance:</strong> To understand how visitors use our website and improve user experience</li>
              <li><strong>Marketing and Advertising:</strong> To deliver relevant advertisements and measure campaign effectiveness</li>
              <li><strong>Security:</strong> To protect against fraudulent activity and enhance website security</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-navy mb-3">3.1 Strictly Necessary Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies are essential for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions. The website cannot function properly without these cookies.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700 mb-2"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Session cookies for maintaining your browsing session</li>
                <li>Security cookies for authentication and fraud prevention</li>
                <li>Load balancing cookies for distributing traffic</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-navy mb-3">3.2 Performance and Analytics Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies collect information about how visitors use our website, such as which pages are visited most often and if error messages are received. This helps us improve website performance and user experience.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700 mb-2"><strong>We use:</strong></p>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li><strong>Google Analytics:</strong> To track website usage and visitor behavior</li>
                <li><strong>Heatmap Tools:</strong> To understand user interaction patterns</li>
                <li><strong>Performance Monitoring:</strong> To identify and fix technical issues</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-navy mb-3">3.3 Functionality Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700 mb-2"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li>Remembering your property search preferences</li>
                <li>Storing your currency and language preferences</li>
                <li>Saving your favorite properties or saved searches</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-navy mb-3">3.4 Targeting and Advertising Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies are used to deliver advertisements that are relevant to you and your interests. They also help measure the effectiveness of advertising campaigns.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700 mb-2"><strong>We may use:</strong></p>
              <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                <li><strong>Facebook Pixel:</strong> For retargeting and conversion tracking</li>
                <li><strong>Google Ads:</strong> For displaying relevant advertisements</li>
                <li><strong>LinkedIn Insight Tag:</strong> For professional audience targeting</li>
                <li><strong>Third-Party Ad Networks:</strong> For broader advertising reach</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to our own cookies, we may use various third-party cookies to report usage statistics, deliver advertisements, and provide enhanced functionality.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Third-party services we use include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Google Analytics:</strong> Web analytics service (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Privacy Policy</a>)</li>
              <li><strong>Facebook:</strong> Social media integration and advertising (<a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Privacy Policy</a>)</li>
              <li><strong>WhatsApp:</strong> Messaging integration (<a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Privacy Policy</a>)</li>
              <li><strong>YouTube:</strong> Video content embedding (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Privacy Policy</a>)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These third parties have their own privacy policies, and we have no control over their cookies or how they use the information collected.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">5. How to Control Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences through:
            </p>
            
            <h3 className="text-xl font-semibold text-navy mb-3">5.1 Browser Settings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can set your browser to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Block all cookies</li>
              <li>Accept only first-party cookies</li>
              <li>Delete cookies when you close your browser</li>
              <li>Notify you when a cookie is being set</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <h3 className="text-xl font-semibold text-navy mb-3">5.2 Opt-Out Tools</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can opt out of specific types of cookies using these tools:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Google Analytics Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Browser Add-on</a></li>
              <li><strong>Facebook Ad Preferences:</strong> <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Ad Settings</a></li>
              <li><strong>Network Advertising Initiative:</strong> <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Opt-out Tool</a></li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Important:</strong> Blocking or deleting cookies may impact your experience on our website. Some features may not function properly, and you may need to re-enter information or preferences.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">6. Do Not Track Signals</h2>
            <p className="text-gray-700 leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. At this time, our website does not respond to DNT browser signals, but we respect your privacy choices through the cookie controls described above.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">7. Cookie Duration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies can be either "session cookies" or "persistent cookies":
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them manually</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The duration of persistent cookies varies depending on their purpose, typically ranging from a few days to several years.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">8. Updates to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by posting the updated policy on this page with a new "Last updated" date.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">9. More Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more information about how we handle your personal data, please refer to our <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For general information about cookies, you can visit:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">AllAboutCookies.org</a></li>
              <li><a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">AboutCookies.org</a></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-navy mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="text-gray-700 mb-2"><strong>City Plaza Real Estate</strong></p>
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
