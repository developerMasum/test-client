import React from "react";

const Shop = () => {
  return (
    <div>
      <h4>
        <div className="bg-gray-700 min-h-screen">
          {/* Header */}
          <header className="bg-base-100 text-white py-6">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold">Contact Us</h1>
              <p className="mt-2">We'd love to hear from you!</p>
            </div>
          </header>

          {/* Contact Information */}
          <section className="py-10">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gray-700 p-8 rounded shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                  <form>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-white font-bold"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full py-2 px-3 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-white font-bold"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full py-2 px-3 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="message"
                        className="block text-white font-bold"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="w-full py-2 px-3 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-base-100 text-white font-semibold py-2 px-4 rounded hover:bg-base-700"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-700 p-8 rounded shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">
                    Contact Information
                  </h2>
                  <ul>
                    <li className="flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Gazipur, Dhaka , Bangladesh
                    </li>
                    <li className="flex items-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      ash520026@gmail.com
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      01780-520026, 01973-539083
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Map */}
          <section className="py-10">
            <div className="container mx-auto">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67891011213!2d-123.45678901234567!3d12.345678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ4JzIxLjAiTiAxMjPCsDE0JzA1LjAiVw!5e0!3m2!1sen!2sus!4v1234567890123"
                className="w-full h-80 rounded-lg shadow-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </div>
      </h4>
    </div>
  );
};

export default Shop;
