import React, { useEffect, useState } from 'react';
import ShopCard from '../components/ShopCard';

const sampleShops = [
  { _id: 1, name: 'Fashion Hub', category: 'Clothing', location: { name: '1st Floor' } },
  { _id: 2, name: 'Tech World', category: 'Electronics', location: { name: '2nd Floor' } },
  { _id: 3, name: 'Book Heaven', category: 'Books', location: { name: '3rd Floor' } },
  { _id: 4, name: 'Toy Planet', category: 'Kids & Toys', location: { name: 'Ground Floor' } },
  { _id: 5, name: 'Shoe Stop', category: 'Footwear', location: { name: '1st Floor' } },
  { _id: 6, name: 'Watch Zone', category: 'Accessories', location: { name: '2nd Floor' } },
  { _id: 7, name: 'Beauty Bar', category: 'Cosmetics', location: { name: '3rd Floor' } },
  { _id: 8, name: 'Gadget Geek', category: 'Gadgets', location: { name: '2nd Floor' } },
  { _id: 9, name: 'Home Décor', category: 'Interior', location: { name: '3rd Floor' } },
  { _id: 10, name: 'Fitness First', category: 'Sportswear', location: { name: '1st Floor' } },
  { _id: 11, name: 'Jewels & More', category: 'Jewelry', location: { name: 'Ground Floor' } },
  { _id: 12, name: 'Bag Boutique', category: 'Bags', location: { name: '2nd Floor' } },
];

const Shops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    setShops(sampleShops);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-24 md:pt-10 pb-10 transition-all"
      style={{ backgroundImage: "url('/assets/mall3.avif')" }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-xl max-w-7xl mx-auto p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-[#1A1A40] mb-6 text-center">
          🏪 Our Mall Shops
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shops.map((shop) => (
            <ShopCard key={shop._id} shop={shop} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shops;
