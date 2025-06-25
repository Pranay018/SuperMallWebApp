import React from 'react';

const ShopCard = ({ shop }) => {
  return (
    <div className="bg-[#fffaf0] border border-[#f1e7d0] rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-[#1A1A40]">{shop.name}</h3>
        <span className="text-2xl">{getIcon(shop.category)}</span>
      </div>

      <p className="text-[#4B5563] text-sm">
        <span className="font-medium">🗂️ Category:</span> {shop.category}
      </p>

      <p className="text-[#1A1A40] text-sm font-medium">
        <span className="font-medium">📍 Location:</span> {shop.location?.name || 'Unknown'}
      </p>

      <div className="mt-4">
        <button className="w-full bg-[#f7c35f] hover:bg-[#fbbf24] text-[#1A1A40] font-semibold py-2 rounded-lg transition">
          Visit Shop
        </button>
      </div>
    </div>
  );
};


const getIcon = (category) => {
  const icons = {
    Clothing: '👗',
    Electronics: '🔌',
    Books: '📚',
    Gadgets: '📱',
    Jewelry: '💎',
    Sportswear: '👟',
    Cosmetics: '💄',
    Bags: '👜',
    Interior: '🛋️',
    Accessories: '⌚',
    'Kids & Toys': '🧸',
    Footwear: '🥾',
  };

  return icons[category] || '🏬';
};

export default ShopCard;
