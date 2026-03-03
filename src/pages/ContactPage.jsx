function ContactPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Have a question or want to visit our store? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h2>
            <form>
              <div className="mb-4 sm:mb-5">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Name</label>
                <input type="text" id="name" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition text-sm sm:text-base" />
              </div>
              <div className="mb-4 sm:mb-5">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Email</label>
                <input type="email" id="email" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition text-sm sm:text-base" />
              </div>
              <div className="mb-5 sm:mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">Message</label>
                <textarea id="message" rows="5" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition text-sm sm:text-base"></textarea>
              </div>
              <button type="submit" className="w-full bg-gray-800 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base">
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Location</h2>
              <div className="text-gray-700 leading-relaxed space-y-2 text-sm sm:text-base">
                <p className="font-semibold text-base sm:text-lg">Sunil Furniture</p>
                <p>123 Furniture Lane, Industrial Area</p>
                <p>Chandigarh, 160017, India</p>
              </div>
              <div className="mt-4 sm:mt-6 text-gray-700 space-y-2 text-sm sm:text-base">
                <p><span className="font-semibold">Phone:</span> +91 123 456 7890</p>
                <p><span className="font-semibold">Email:</span> contact@sunilfurniture.com</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md h-64 sm:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.3624341258!2d76.6934882071289!3d30.73226389194062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0x52ce1ddd33a3a6a4!2sChandigarh!5e0!3m2!1sen!2sin!4v1678886483345!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
