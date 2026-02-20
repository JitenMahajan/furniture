function AboutPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">About Sunil Furniture</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Crafting quality furniture with passion and precision in Chandigarh for over 20 years.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden">
          <div className="lg:w-1/2">
            <img 
              className="h-80 w-full object-cover lg:h-full" 
              src="https://images.unsplash.com/photo-1533090481721-54f36586a146?auto=format&fit=crop&w=800&q=80" 
              alt="Craftsman working on furniture" 
            />
          </div>
          <div className="lg:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded on the principles of quality craftsmanship and timeless design, Sunil Furniture began as a small workshop in the heart of Chandigarh. For two decades, we have been dedicated to creating beautiful, durable furniture that turns a house into a home. Our passion for woodworking and commitment to our customers have been the cornerstones of our success.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide our community with high-quality, stylish, and comfortable furniture at an honest price. We believe that great design should be accessible to everyone, and we strive to create pieces that are not only beautiful but also built to last for generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
