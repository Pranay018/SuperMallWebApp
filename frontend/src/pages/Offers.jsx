import React, { useEffect, useState } from 'react';
import OfferCard from '../components/OfferCard';

const sampleOffers = [
  {
    _id: 1,
    title: 'Flat 50% Off on Shoes',
    description: 'Get your favorite sneakers at half price!',
    discount: 50,
    shop: { name: 'Shoe Stop' },
    validTill: '2025-07-15',
  },
  {
    _id: 2,
    title: 'Buy 1 Get 1 Free',
    description: 'Applicable on all summer wear.',
    discount: 100,
    shop: { name: 'Fashion Hub' },
    validTill: '2025-07-10',
  },
  {
    _id: 3,
    title: '25% Off on Electronics',
    description: 'Limited-time offer on gadgets.',
    discount: 25,
    shop: { name: 'Tech World' },
    validTill: '2025-07-20',
  },
  {
    _id: 4,
    title: 'Free Gift on ₹2000+ Purchase',
    description: 'Valid on all cosmetics orders.',
    discount: 0,
    shop: { name: 'Beauty Bar' },
    validTill: '2025-07-05',
  },
  {
    _id: 5,
    title: '30% Off on Bags',
    description: 'Trendy bags at slashed prices!',
    discount: 30,
    shop: { name: 'Bag Boutique' },
    validTill: '2025-07-25',
  },
  {
    _id: 6,
    title: 'Flash Sale - 60% Off',
    description: 'Interior décor items discounted heavily.',
    discount: 60,
    shop: { name: 'Home Décor' },
    validTill: '2025-07-08',
  },
  {
    _id: 7,
    title: '15% Off on Watches',
    description: 'Premium watches at better value.',
    discount: 15,
    shop: { name: 'Watch Zone' },
    validTill: '2025-07-30',
  },
  {
    _id: 8,
    title: 'Books Bonanza',
    description: 'Buy 2 get 1 free on fiction.',
    discount: 100,
    shop: { name: 'Book Heaven' },
    validTill: '2025-07-12',
  },
];

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setOffers(sampleOffers);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-24 md:pt-10 pb-10 transition-all"
      style={{ backgroundImage: "url('/assets/mall3.avif')" }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-xl max-w-6xl mx-auto p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-[#1A1A40] mb-6 text-center">
          🎉 Exclusive Mall Offers
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer._id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
