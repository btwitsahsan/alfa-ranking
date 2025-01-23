export default function graphicPage(){
    return(
        <>
        <div className="">
  {/* Header Section */}
  <header className="bg-gray-900 py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-teal-600">
        Graphic Design Services
      </h1>
      <p className="text-lg">
        Transform your ideas into stunning visuals with our expert graphic
        design services.
      </p>
    </div>
  </header>

  {/* Why Choose Us Section */}
  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
      Why Choose Our Graphic Design Services?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
        <h3 className="text-xl font-semibold text-teal-600 mb-4">
          Unique Designs
        </h3>
        <p className="text-white">
          We craft designs that stand out, capturing your brand&apos;s essence and
          creating a lasting impression.
        </p>
      </div>
      <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
        <h3 className="text-xl font-semibold text-teal-600 mb-4">
          Creative Expertise
        </h3>
        <p className="text-white">
          Our team of creative professionals brings innovation and originality
          to every project.
        </p>
      </div>
      <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
        <h3 className="text-xl font-semibold text-teal-600 mb-4">
          Quick Turnaround
        </h3>
        <p className="text-white">
          We ensure timely delivery of high-quality designs without
          compromising on creativity.
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
            Logo Design
          </h3>
          <p className="text-white">
            Create a memorable brand identity with a custom logo designed to
            reflect your vision and values.
          </p>
        </li>
        <li className="shadow-lg rounded-lg p-6 bg-gray-900">
          <h3 className="text-lg font-semibold text-teal-600 mb-2">
            Branding
          </h3>
          <p className="text-white">
            Develop a cohesive brand image with expertly designed visual
            elements, from color schemes to typography.
          </p>
        </li>
        <li className="shadow-lg rounded-lg p-6 bg-gray-900">
          <h3 className="text-lg font-semibold text-teal-600 mb-2">
            Marketing Collateral
          </h3>
          <p className="text-white">
            Design impactful brochures, flyers, posters, and other marketing
            materials to captivate your audience.
          </p>
        </li>
        <li className="shadow-lg rounded-lg p-6 bg-gray-900">
          <h3 className="text-lg font-semibold text-teal-600 mb-2">
            Social Media Graphics
          </h3>
          <p className="text-white">
            Enhance your social media presence with eye-catching posts, banners,
            and ad creatives.
          </p>
        </li>
        <li className="shadow-lg rounded-lg p-6 bg-gray-900">
          <h3 className="text-lg font-semibold text-teal-600 mb-2">
            Infographics
          </h3>
          <p className="text-white">
            Convey complex ideas through visually engaging and informative
            infographics.
          </p>
        </li>
        <li className="shadow-lg rounded-lg p-6 bg-gray-900">
          <h3 className="text-lg font-semibold text-teal-600 mb-2">
            Packaging Design
          </h3>
          <p className="text-white">
            Design attractive and functional packaging that enhances your
            product&apos;s appeal.
          </p>
        </li>
      </ul>
    </div>
  </section>

  {/* Call to Action */}
  <section className="bg-gray-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Ready to Transform Your Brand&apos;s Visual Identity?
      </h2>
      <p className="mb-6">
        Contact us today to discuss your graphic design needs and take your
        brand to the next level.
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