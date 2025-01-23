
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 pt-12'>
        <div className='border-b w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-white'>
  {/* Column 1: About Section */}
  <div>
    <h4 className="text-teal-600 font-semibold mb-4">About Us</h4>
    <p className="text-sm">
      Alfa Ranking is a digital agency offering expert web development, graphic design, SEO, and digital marketing services. We help businesses grow online through innovative solutions.
    </p>
  </div>

  {/* Column 2: Quick Links */}
  <div>
    <h4 className="text-teal-600 font-semibold mb-4">Quick Links</h4>
    <ul>
      <li><a href="#services" className="text-sm hover:text-teal-600">Services</a></li>
      <li><a href="#about" className="text-sm hover:text-teal-600">About Us</a></li>
      <li><a href="#contact" className="text-sm hover:text-teal-600">Contact</a></li>
      <li><a href="#blog" className="text-sm hover:text-teal-600">Blog</a></li>
    </ul>
  </div>

  {/* Column 3: Contact */}
  <div>
    <h4 className="text-teal-600 font-semibold mb-4">Contact</h4>
    <p className="text-sm flex gap-3"><i className="fa-solid fa-location-dot"></i>1234 Street Name, City, Country</p>
    <p className="text-sm flex gap-3"><i className="fa-solid fa-envelope"></i>Email: contact@alfaranking.com</p>
    <p className="text-sm flex gap-3"><i className="fa-solid fa-phone"></i>Phone: +92 342 0899 289</p>
  </div>

  {/* Column 4: Social Media */}
  <div>
    <h4 className="text-teal-600 font-semibold mb-4">Follow Us</h4>
    <div className="flex space-x-4">
      <a href="#" className="text-teal-600 hover:text-teal-400"><i className="fab fa-facebook-f"></i> Facebook</a>
      <a href="#" className="text-teal-600 hover:text-teal-400"><i className="fab fa-twitter"></i> Twitter</a>
      <a href="#" className="text-teal-600 hover:text-teal-400"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
      <a href="#" className="text-teal-600 hover:text-teal-400"><i className="fab fa-instagram"></i> Instagram</a>
    </div>
  </div>
</div>

{/* Footer Bottom Section */}
<div className=' text-white py-4'>
  <div className='max-w-6xl mx-auto text-center'>
    <p className="text-sm">&copy; 2025 Alfa Ranking. All rights reserved.</p>
  </div>
</div>

    </footer>
  )
}

export default Footer