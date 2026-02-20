import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Modern Sofa',
    price: '₹45,000',
    image: 'https://images.unsplash.com/photo-1540574163024-5884b0b5b529?auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    price: '₹25,000',
    image: 'https://images.unsplash.com/photo-1604074134424-a0d2c594c629?auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    name: 'Comfortable Armchair',
    price: '₹15,000',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1470&q=80',
  },
];

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1470&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Find Your Perfect Furniture</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">Quality, comfort, and style for your home in Chandigarh.</p>
          <Link to="/products" className="bg-white text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
