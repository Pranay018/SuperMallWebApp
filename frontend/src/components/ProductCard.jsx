import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-[#fffaf0] border border-[#f1e7d0] rounded-2xl shadow-md hover:shadow-xl transition-all p-5 flex flex-col justify-between">
      <h3 className="text-xl font-bold text-[#1A1A40] mb-1">{product.name}</h3>
      <p className="text-sm text-[#4B5563] mb-1">🗂️ Category: {product.category}</p>
      <p className="text-sm text-[#1A1A40] mb-1">🏪 Shop: {product.shop?.name}</p>
      <p className="text-sm text-green-700 font-semibold mb-3">₹ {product.price}</p>
      <button className="mt-auto bg-[#f7c35f] hover:bg-[#fbbf24] text-[#1A1A40] font-semibold py-2 rounded-lg transition">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
