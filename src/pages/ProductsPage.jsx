import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Elegant Sofa', price: '₹45,000', image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Minimalist Chair', price: '₹8,500', image: 'https://images.unsplash.com/photo-1505843494583-c5a75c5a7f6b?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Wooden Dining Table', price: '₹32,000', image: 'https://images.unsplash.com/photo-1530014706981-142592a85686?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Modern Bookshelf', price: '₹18,500', image: 'https://images.unsplash.com/photo-1594314934243-964546055549?auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Cozy Armchair', price: '₹15,000', image: 'https://images.unsplash.com/photo-1598300042247-d08b54ab9c14?auto=format&fit=crop&w=800&q=80' },
  { id: 6, name: 'Sleek Office Desk', price: '₹22,000', image: 'https://images.unsplash.com/photo-1533090481721-54f36586a146?auto=format&fit=crop&w=800&q=80' },
  { id: 7, name: 'Rustic Coffee Table', price: '₹12,000', image: 'https://images.unsplash.com/photo-1554228373-dabc2a42d379?auto=format&fit=crop&w=800&q=80' },
  { id: 8, name: 'King Size Bed Frame', price: '₹55,000', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80' },
];

function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Furniture Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of high-quality furniture, from modern designs to timeless classics, all crafted to perfection.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
