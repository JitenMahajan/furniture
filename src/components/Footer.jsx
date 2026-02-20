function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold">Sunil Furniture</h3>
            <p className="text-gray-400">Your trusted furniture store in Chandigarh.</p>
          </div>
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Sunil Furniture. All rights reserved.</p>
            <p className="text-sm text-gray-500">Designed with passion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
