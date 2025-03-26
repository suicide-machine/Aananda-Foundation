import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content - using flex instead of grid */}
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
            <div className="mb-4">
              <img src="/logo.svg" alt="Company Logo" className="h-10" />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Empowering businesses with innovative solutions since 2010. We're
              dedicated to excellence and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              {/* Social icons remain the same */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Other social icons... */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
            <h3 className="text-white text-lg font-semibold mb-6 relative pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500" />
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-1"
                >
                  Home
                </a>
              </li>
              {/* Other quick links... */}
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
            <h3 className="text-white text-lg font-semibold mb-6 relative pb-2">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500" />
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-1"
                >
                  Web Design
                </a>
              </li>
              {/* Other services... */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8 px-4">
            <h3 className="text-white text-lg font-semibold mb-6 relative pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500" />
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  123 Business Ave, Suite 500, San Francisco, CA 94107
                </span>
              </li>
              {/* Other contact info... */}
            </ul>
            <div>
              <h4 className="text-white text-sm font-semibold mb-3">
                Subscribe to Newsletter
              </h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 w-full rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright - remains the same */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Your Company Name. All Rights
              Reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
