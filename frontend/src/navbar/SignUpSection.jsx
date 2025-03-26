import React from "react"
import { Send } from "lucide-react"

const SignUpSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-50/30 to-gray-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Heading Section */}
          <div className="lg:w-1/2">
            <div className="text-left">
              <h2 className="text-6xl sm:text-4xl font-bold !text-gray-900 mb-4 relative pb-2 inline-block">
                Want to Stay Updated?
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
              </h2>
              <p className="text-lg !sm:text-xl text-gray-600 leading-7">
                Sign up for our newsletter to receive the latest updates,
                announcements, and exclusive content directly to your inbox.
              </p>

              {/* Benefits List */}
              <ul className="!mt-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Exclusive content and early access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Monthly roundups of our best content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>No spam, unsubscribe anytime</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form Container */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                  <span className="text-blue-500">✉️</span>Sign Up
                </h2>

                <form className="space-y-6">
                  <div className="space-y-5">
                    {/* Name Field */}
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                      >
                        Your Name
                      </label>
                      <div className="flex gap-2 border">
                        <div className="inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <input
                          id="name"
                          type="text"
                          className="block w-full pl-10 pr-4 py-3 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                      >
                        Email Address
                      </label>
                      <div className="flex gap-2 border">
                        <div className="inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <input
                          id="email"
                          type="email"
                          className="block w-full pl-10 pr-4 py-3 rounded-lg transition-all focus:ring-0 focus:outline-none"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center px-6 py-3.5 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Subscribe Now
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>

                {/* Privacy Note */}
                <p className="text-xs sm:text-sm text-gray-500 text-center mt-6">
                  We respect your privacy. Unsubscribe anytime. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUpSection
