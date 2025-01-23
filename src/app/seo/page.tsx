export default function seoPage(){
    return(
        <>
        <div className="">
      {/* Header Section */}
      <header className="bg-gray-900 h-[80vh] flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-teal-600">
            SEO Services
          </h1>
          <p className="text-lg">
            Boost your website&apos;s visibility and drive more traffic with our expert SEO services.
          </p>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
          Why Choose Our SEO Services?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">
              Proven Results
            </h3>
            <p className="text-white">
              Our strategies deliver measurable results, increasing your online visibility and ROI.
            </p>
          </div>
          <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">
              Tailored Strategies
            </h3>
            <p className="text-white">
              We customize our approach to meet your unique business goals and target audience.
            </p>
          </div>
          <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
            <h3 className="text-xl font-semibold text-teal-600 mb-4">
              Expert Team
            </h3>
            <p className="text-white">
              Our team of SEO experts stays ahead of trends to ensure your success.
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
                Keyword Research
              </h3>
              <p className="text-white">
                Identify high-performing keywords to optimize your content and increase visibility.
              </p>
            </li>
            <li className="shadow-lg rounded-lg p-6 bg-gray-900">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                On-Page Optimization
              </h3>
              <p className="text-white">
                Enhance your website&apos;s structure and content to improve search engine rankings.
              </p>
            </li>
            <li className="shadow-lg rounded-lg p-6 bg-gray-900">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Link Building
              </h3>
              <p className="text-white">
                Build a network of high-quality backlinks to boost your domain authority.
              </p>
            </li>
            <li className="shadow-lg rounded-lg p-6 bg-gray-900">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Local SEO
              </h3>
              <p className="text-white">
                Optimize your business for local searches to attract customers nearby.
              </p>
            </li>
            <li className="shadow-lg rounded-lg p-6 bg-gray-900">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Technical SEO
              </h3>
              <p className="text-white">
                Improve your website&apos;s technical aspects, including speed, mobile-friendliness, and crawlability.
              </p>
            </li>
            <li className="shadow-lg rounded-lg p-6 bg-gray-900">
              <h3 className="text-lg font-semibold text-teal-600 mb-2">
                Analytics & Reporting
              </h3>
              <p className="text-white">
                Track your SEO progress with detailed analytics and performance reports.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Optimize Your Website?
          </h2>
          <p className="mb-6">
            Contact us today to discuss your SEO needs and get a customized strategy for your business.
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
    )
}