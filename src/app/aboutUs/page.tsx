export default function AboutUsPage() {
    return (
      <>
        <div className="">
  
          {/* Header Section */}
          <header className="bg-gray-900 h-[80vh] flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl font-bold mb-4 text-teal-600">
                Alfa Ranking
              </h1>
              <p className="text-lg">
                Your trusted partner in driving digital success through innovative
                Web Development, Graphic Design, SEO, and Digital Marketing services.
              </p>
            </div>
          </header>
  
          {/* Our Story Section */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
              Our Story
            </h2>
            <p className="text-lg text-center text-white mb-6">
              At Alfa Ranking, we are passionate about helping businesses thrive in
              the ever-evolving digital world. Founded with the mission to provide
              cutting-edge solutions in Web Development, Graphic Design, SEO, and
              Digital Marketing, our agency has successfully partnered with companies
              to achieve their digital goals and elevate their online presence.
            </p>
            <p className="text-lg text-center text-white mb-6">
              With a team of highly skilled professionals, we work collaboratively
              with our clients to ensure that every solution we provide is tailored
              to their specific business needs and objectives.
            </p>
          </section>
  
          {/* Our Mission Section */}
          <section className="bg-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-center text-gray-800">
                Our mission is to empower businesses by providing exceptional
                services that foster growth, increase visibility, and create lasting
                connections with their target audiences. We strive to deliver high
                quality, innovative, and result-oriented solutions that help our
                clients succeed in the digital landscape.
              </p>
            </div>
          </section>
  
          {/* Our Values Section */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">
                  Innovation
                </h3>
                <p className="text-white">
                  We embrace creativity and innovation to provide forward-thinking
                  solutions for our clients.
                </p>
              </div>
              <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">
                  Integrity
                </h3>
                <p className="text-white">
                  We uphold the highest standards of integrity and transparency in
                  every project we undertake.
                </p>
              </div>
              <div className="shadow-lg rounded-lg p-6 text-center bg-gray-900">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">
                  Excellence
                </h3>
                <p className="text-white">
                  We are committed to delivering high-quality services that exceed
                  expectations.
                </p>
              </div>
            </div>
          </section>
  
          {/* Meet the Team Section */}
          <section className="py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-teal-600 mb-6 text-center">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="shadow-lg rounded-lg p-6 bg-gray-900">
                  <img src="/team-member1.jpg" alt="Team Member" className="w-full rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">John Doe</h3>
                  <p className="text-white">Founder & CEO</p>
                </div>
                <div className="shadow-lg rounded-lg p-6 bg-gray-900">
                  <img src="/team-member2.jpg" alt="Team Member" className="w-full rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">Jane Smith</h3>
                  <p className="text-white">Lead Web Developer</p>
                </div>
                <div className="shadow-lg rounded-lg p-6 bg-gray-900">
                  <img src="/team-member3.jpg" alt="Team Member" className="w-full rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold text-teal-600 mb-2">Michael Johnson</h3>
                  <p className="text-white">Senior Graphic Designer</p>
                </div>
              </div>
            </div>
          </section>
  
          {/* Call to Action */}
          <section className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                Let&apos;s Build Something Great Together
              </h2>
              <p className="mb-6">
                Partner with Alfa Ranking and let us help you achieve your digital
                goals. Get in touch with us today.
              </p>
              <a
                href="/contactUs"
                className="BTN py-2 px-4 bg-teal-600 hover:bg-teal-600 after:bg-slate-100 hover:text-teal-600"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </>
    );
  }
  