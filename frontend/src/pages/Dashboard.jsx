import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const cards = [
    { title: 'Total Shops', count: 12, link: '/shops', icon: '🏪', bg: '#1F51FF' },
    { title: 'Active Offers', count: 8, link: '/offers', icon: '🎁', bg: '#7EC8E3' },
    { title: 'Products Listed', count: 150, link: '/products', icon: '🛍️', bg: '#1F51FF' },
    { title: 'Mall Locations', count: 5, link: '/locations', icon: '📍', bg: '#7EC8E3' },
  ];

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-24 md:pt-10 pb-10 transition-all"
      style={{ backgroundImage: "url('/assets/mall3.avif')" }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-xl max-w-6xl mx-auto p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-[#1A1A40] mb-8 text-center">
          📊 Dashboard Overview
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <Link
              to={card.link}
              key={index}
              className="bg-white border border-[#D9E2EC] rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="p-5 flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl mb-3"
                  style={{ backgroundColor: card.bg }}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A40]">{card.title}</h3>
                <p className="text-2xl font-bold text-[#1F51FF]">{card.count}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
