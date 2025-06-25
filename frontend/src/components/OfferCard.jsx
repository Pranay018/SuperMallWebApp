import React from 'react';

const OfferCard = ({ offer }) => {
  return (
    <div className="bg-[#fffaf0] border border-[#f1e7d0] rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold text-[#1A1A40] mb-2">{offer.title}</h3>
        <p className="text-[#4B5563] text-sm mb-3">{offer.description}</p>

        <p className="text-sm text-[#1A1A40] font-semibold mb-1">
          🏷️ Discount: <span className="text-green-600 font-bold">{offer.discount}%</span>
        </p>

        <p className="text-sm text-[#6B7280]">
          🗓️ Valid Till: {new Date(offer.validTill).toLocaleDateString()}
        </p>

        {offer.shop?.name && (
          <p className="text-sm text-[#1A1A40] mt-2 font-medium">
            🏪 Shop: <span className="font-semibold">{offer.shop.name}</span>
          </p>
        )}
      </div>

      <button className="mt-4 bg-[#f7c35f] hover:bg-[#fbbf24] text-[#1A1A40] font-semibold py-2 rounded-lg transition">
        Claim Offer
      </button>
    </div>
  );
};

export default OfferCard;
