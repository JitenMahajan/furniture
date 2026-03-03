function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8 sm:mt-12">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Sunil Furniture</h3>
            <p className="text-gray-400 text-sm sm:text-base">Your trusted furniture store in Chandigarh.</p>
          </div>
          <div className="text-center">
            <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Sunil Furniture. All rights reserved.</p>
            <p className="text-xs sm:text-sm text-gray-500">Designed with passion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
