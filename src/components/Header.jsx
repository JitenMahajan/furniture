import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Sunil Furniture
        </Link>
        <nav className="space-x-8 text-lg">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
