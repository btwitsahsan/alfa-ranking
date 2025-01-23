export default function contactPage(){
    return (
        <div className="min-h-screen py-10 bg-gray-900 text-white flex flex-col justify-center items-center">
          <div className="max-w-6xl w-full px-6 pt-20 lg:px-8">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-teal-600">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Have a question or want to work with us? We&apos;d love to hear from you!
              </p>
            </div>
    
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-800 p-6 lg:p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-teal-600 mb-6">
                  Send Us a Message
                </h2>
                <form
                  action="/api/contact" // Example: Replace this with your API endpoint
                  method="POST"
                  className="space-y-6"
                >
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
    
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
    
                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-gray-300"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Write your message here"
                      className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    ></textarea>
                  </div>
    
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 BTN bg-teal-600 hover:bg-teal-600 after:bg-slate-100 hover:text-teal-600"
                  >
                    Send Message
                  </button>
                </form>
              </div>
    
              {/* Contact Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-teal-600">
                  Contact Details
                </h2>
                <p className="text-gray-300">
                  If you&apos;d prefer to reach out directly, here&apos;s how you can contact
                  us:
                </p>
                <div>
                  <h3 className="font-medium text-lg text-white">Email:</h3>
                  <p className="text-gray-300">contact@alfaranking.com</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white">Phone:</h3>
                  <p className="text-gray-300">+92-342-089-9289</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white">Address:</h3>
                  <p className="text-gray-300">
                    1234 Street Name, City, Country
                  </p>
                </div>
                <div className="flex space-x-4 mt-4">
                  {/* Social Media Links */}
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-400 text-lg"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-400 text-lg"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-400 text-lg"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-400 text-lg"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}