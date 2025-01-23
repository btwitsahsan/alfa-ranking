export default function webPage() {
  return (
    <>
      <div className="">
        {/* Header Section */}
        <header className="bg-gray-900 h-[80vh] flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4 text-teal-600">
              Web Development Services
            </h1>
            <p className="text-lg">
              Build modern, responsive, and high-performing websites tailored to
              your business needs.
            </p>
          </div>
        </header>

        {/* Why Choose Us Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
            Why Choose Our Web Development Services?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Customized Solutions
              </h3>
              <p className="text-white">
                We create websites tailored to your specific requirements,
                ensuring they align perfectly with your brand identity.
              </p>
            </div>
            <div className=" shadow-lg rounded-lg p-6 text-center bg-gray-900">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Responsive Design
              </h3>
              <p className="text-white">
                Our websites are fully responsive, offering seamless user
                experiences across all devices.
              </p>
            </div>
            <div className=" shadow-lg rounded-lg p-6 text-center bg-gray-900">
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                Cutting-Edge Technology
              </h3>
              <p className="text-white">
                We use the latest technologies and frameworks to deliver
                high-quality, future-ready solutions.
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
              <li className=" shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Frontend Development
                </h3>
                <p className="text-white">
                  Create visually appealing and user-friendly interfaces using
                  modern frameworks like React, Angular, and Vue.js.
                </p>
              </li>
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Backend Development
                </h3>
                <p className="text-white">
                  Develop robust server-side applications with Node.js, Python,
                  PHP, and other cutting-edge technologies.
                </p>
              </li>
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  E-commerce Solutions
                </h3>
                <p className="text-white">
                  Build scalable e-commerce platforms with integrated payment
                  gateways and inventory management systems.
                </p>
              </li>
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  CMS Development
                </h3>
                <p className="text-white">
                  Develop custom content management systems or utilize platforms
                  like WordPress, Drupal, and Joomla.
                </p>
              </li>
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Web Application Development
                </h3>
                <p className="text-white">
                  Create feature-rich web applications that cater to your unique
                  business needs.
                </p>
              </li>
              <li className="shadow-lg rounded-lg p-6 bg-gray-900">
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  Website Maintenance
                </h3>
                <p className="text-white">
                  Ensure your website remains up-to-date, secure, and performs
                  optimally with our maintenance services.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Elevate Your Online Presence?
            </h2>
            <p className="mb-6">
              Contact us today to discuss your web development needs and get a
              free consultation.
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
