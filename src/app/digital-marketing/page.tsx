export default function dmPage() {
  return (
    <>
      <div className="">
        {/* Header Section */}
        <header className="bg-gray-900 py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-teal-600">
              Digital Marketing Services
            </h1>
            <p className="text-lg">
              Grow your business and reach your target audience with data-driven
              and creative digital marketing strategies.
            </p>
          </div>
        </header>

        {/* Why Choose Us Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
            Why Choose Our Digital Marketing Services?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Proven Strategies
              </h3>
              <p className="text-white">
                Our marketing experts design and implement strategies that
                deliver measurable results.
              </p>
            </div>
            <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Targeted Campaigns
              </h3>
              <p className="text-white">
                Reach the right audience with precisely targeted campaigns
                tailored to your business goals.
              </p>
            </div>
            <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Comprehensive Solutions
              </h3>
              <p className="text-white">
                We cover everything from SEO and PPC to content marketing and
                social media management.
              </p>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
              Services We Offer
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-white">
                  Optimize your website to rank higher on search engines and
                  drive organic traffic.
                </p>
              </li>
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Pay-Per-Click (PPC) Advertising
                </h3>
                <p className="text-white">
                  Maximize ROI with targeted PPC campaigns on Google, Facebook,
                  and other platforms.
                </p>
              </li>
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Social Media Marketing
                </h3>
                <p className="text-white">
                  Build your brand presence and engage your audience on social
                  media platforms.
                </p>
              </li>
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Content Marketing
                </h3>
                <p className="text-white">
                  Create and distribute high-quality content that attracts and
                  converts your audience.
                </p>
              </li>
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Email Marketing
                </h3>
                <p className="text-white">
                  Reach your audience directly with personalized and impactful
                  email campaigns.
                </p>
              </li>
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Analytics and Reporting
                </h3>
                <p className="text-white">
                  Track your performance with detailed analytics and actionable
                  insights.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Boost Your Online Presence?
            </h2>
            <p className="mb-6">
              Contact us today to create a winning digital marketing strategy
              for your business.
            </p>
            <a
              href="/contactUs"
              className="BTN py-2 px-4 bg-teal-600 hover:bg-teal-600 after:bg-slate-100 hover:text-teal-600"
            >
              Get Started
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
