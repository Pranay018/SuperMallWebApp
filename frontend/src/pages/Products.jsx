import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const productNames = ['Smartphone', 'Bluetooth Headphones', 'Denim Jacket', 'Running Shoes', 'Wrist Watch',
  'Backpack', 'Wireless Mouse', 'Sunglasses', 'Notebook Set', 'Novel: The Alchemist',
  'Coffee Maker', 'Perfume Set', 'LED Desk Lamp', 'Casual Shirt', 'Yoga Mat',
  'Toy Car', 'Puzzle Set', 'Bluetooth Speaker', 'Necklace', 'Fitness Tracker',
  'T-Shirt', 'Skincare Kit', 'Hair Dryer', 'Drawing Book', 'Kitchen Organizer',
  'Wall Clock', 'Luggage Bag', 'Earrings', 'Laptop Stand', 'Kids Backpack',
  'Water Bottle', 'Table Fan', 'Laptop Sleeve', 'Makeup Brush Set', 'Track Pants',
  'Formal Shoes', 'Bean Bag', 'Floor Mat', 'Electric Kettle', 'Office Chair',
  'Curtains', 'Mini Projector', 'Story Book', 'School Shoes', 'Lipstick',
  'Winter Cap', 'Smart Bulb', 'Wireless Charger', 'Bracelet', 'Photo Frame',
  'Alarm Clock', 'Wireless Keyboard', 'Graphic Tee', 'Room Freshener', 'Jeans',
  'Desk Organizer', 'Wall Painting', 'Formal Shirt', 'Bluetooth Earbuds', 'Fitness Band',
  'Shopping Trolley', 'Plastic Container Set', 'Pen Drive', 'HDMI Cable', 'Book Shelf',
  'Rice Cooker', 'Leather Belt', 'Cotton Saree', 'Ballet Shoes', 'Sweatshirt',
  'Cushion Cover', 'Windcheater Jacket', 'Face Wash', 'LED Strip Light', 'Mirror Set',
  'Smart TV Remote', 'Baby Blanket', 'Thermos Flask', 'Toy Blocks', 'Trolley Bag',
  'Mobile Stand', 'Sneakers', 'Makeup Kit', 'Laptop Backpack', 'Eyeliner',
  'Gaming Mouse', 'Baby Shoes', 'Lunch Box', 'Foundation Cream', 'Kids Drawing Kit',
  'Remote Car Toy', 'Wall Shelf', 'Portable Speaker', 'Bangle Set', 'Kids T-Shirt',
  'Sling Bag', 'Ring Light', 'Decorative Plant', 'Handbag', 'Cotton Kurti',
  'Bluetooth Sunglasses', 'Curtain Rod', 'Tripod Stand', 'Muffler', 'Toaster',
  'Egg Boiler', 'School Uniform', 'Wool Sweater', 'Jumpsuit', 'Smartwatch',
  'Tie Set', 'Night Lamp', 'Photo Album', 'Keychain Set', 'Stationery Set',
  'Board Game', 'Drawing Pens', 'Bike Helmet', 'Winter Socks', 'Mobile Cover',
  'USB Hub', 'Color Pencil Set', 'Eyeglass Frame', 'Leather Wallet', 'Gown',
  'Wall Hanging', 'Boys Jeans', 'Portable Fan', 'Wall Sticker', 'Track Jacket',
  'Toy Kitchen Set', 'Sweatband', 'Canvas Shoes', 'Scarf', 'Hair Straightener',
  'Tennis Racket', 'Sleeping Bag', '3-in-1 Cable', 'Laptop Cooling Pad', 'Diary',
  'Doll Set', 'Study Table', 'TV Unit', 'Decorative Light', 'Matte Lipstick',
  'Chinos', 'Towel Set', 'Wall Hooks', 'Hoodie', 'Sticker Book',];

const sampleProducts = productNames.map((name, index) => ({
  _id: index + 1,
  name,
  category: ['Clothing', 'Electronics', 'Books', 'Toys', 'Accessories'][index % 5],
  price: (Math.random() * 3000 + 200).toFixed(2),
  shop: {
    name: ['Fashion Hub', 'Tech World', 'Book Heaven', 'Toy Planet', 'Watch Zone'][index % 5],
  },
}));

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat px-4 pt-24 md:pt-10 pb-10 transition-all"
      style={{ backgroundImage: "url('/assets/mall3.avif')" }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-xl max-w-7xl mx-auto p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-[#1A1A40] mb-6 text-center">
          🛍️ Explore Mall Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
