import React, { useEffect, useState } from 'react';

const sampleLocations = [
  { _id: 1, name: 'Ground Floor', description: 'Home to fashion outlets and grocery.' },
  { _id: 2, name: 'First Floor', description: 'Electronics, sports and beauty stores.' },
  { _id: 3, name: 'Second Floor', description: 'Toy stores and book shops.' },
  { _id: 4, name: 'Third Floor', description: 'Home décor and furniture showrooms.' },
  { _id: 5, name: 'Fourth Floor', description: 'Food court and entertainment zone.' },
  { _id: 6, name: 'Basement Level', description: 'Parking and hypermarket.' },
];

const Location = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLocations(sampleLocations);
    setLoading(false);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-24 md:pt-10 pb-10 transition-all"
      style={{ backgroundImage: "url('/assets/mall3.avif')" }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-xl max-w-5xl mx-auto p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-[#1A1A40] mb-6 text-center">
          📍 Mall Locations / Floors
        </h2>

        {loading ? (
          <p className="text-center text-[#1A1A40]">Loading...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {locations.map((location) => (
              <div
                key={location._id}
                className="bg-[#fffaf0] border border-[#f1e7d0] rounded-2xl shadow-md hover:shadow-lg transition p-5"
              >
                <h3 className="text-xl font-bold text-[#1F51FF]">{location.name}</h3>
                {location.description && (
                  <p className="text-sm text-[#4B5563] mt-2">{location.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Location;
