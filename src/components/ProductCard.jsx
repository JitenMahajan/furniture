import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 mt-1">{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
