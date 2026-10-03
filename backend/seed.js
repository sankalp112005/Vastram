const mongoose = require('mongoose');
const dns = require('dns');

const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./model/User');
const Product = require('./model/Product');
const Order = require('./model/Order');
const connectDB = require('./config/db');
dns.setServers(['1.1.1.1', '8.8.8.8']);
dotenv.config();

const products = [
  { name: 'Royal Blue Cotton Kurta', description: 'Breathable pure cotton kurta with a classic straight fit and mandarin collar.', price: 1299, category: 'Men', stock: 28, imageUrl: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=900&q=80', ratings: 4.6, numReviews: 42 },
  { name: 'Ivory Embroidered Anarkali', description: 'Elegant embroidered Anarkali suit for festive occasions.', price: 3499, category: 'Women', stock: 16, imageUrl: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=80', ratings: 4.8, numReviews: 31 },
  { name: 'Mustard Silk Saree', description: 'Soft silk saree with a rich zari border and graceful drape.', price: 4299, category: 'Women', stock: 12, imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80', ratings: 4.7, numReviews: 27 },
  { name: 'Classic Black Nehru Jacket', description: 'Tailored Nehru jacket to layer over kurta-pyjama sets.', price: 2199, category: 'Men', stock: 20, imageUrl: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80', ratings: 4.4, numReviews: 18 },
  { name: 'Floral Cotton Co-ord Set', description: 'Lightweight floral printed top and palazzo set for everyday comfort.', price: 1899, category: 'Women', stock: 24, imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80', ratings: 4.5, numReviews: 36 },
  { name: 'Maroon Bandhgala Suit', description: 'Refined Bandhgala suit with a structured silhouette for celebrations.', price: 5999, category: 'Men', stock: 9, imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80', ratings: 4.9, numReviews: 14 }
];

const importData = async () => {
  try {
    await connectDB();

    // Development-only: this clears current database data before inserting samples.
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    const hashedPassword = await bcrypt.hash('password123', 10);
    await User.create({ name: 'Vastram Admin', email: 'admin@vastram.in', password: hashedPassword, role: 'admin', verified: true });
    const customer = await User.create({ name: 'Aarav Sharma', email: 'aarav@example.com', password: hashedPassword, role: 'user', verified: true });

    const createdProducts = await Product.insertMany(products);
    await Order.insertMany([
      {
        userId: customer._id,
        items: [
          { productId: createdProducts[0]._id, qty: 1, price: createdProducts[0].price },
          { productId: createdProducts[3]._id, qty: 1, price: createdProducts[3].price }
        ],
        totalAmount: createdProducts[0].price + createdProducts[3].price,
        address: { fullName: 'Aarav Sharma', street: '42 Residency Road', city: 'Bengaluru', postalCode: '560025', country: 'India' },
        paymentId: 'seed_payment_001',
        status: 'Delivered'
      },
      {
        userId: customer._id,
        items: [{ productId: createdProducts[1]._id, qty: 1, price: createdProducts[1].price }],
        totalAmount: createdProducts[1].price,
        address: { fullName: 'Aarav Sharma', street: '42 Residency Road', city: 'Bengaluru', postalCode: '560025', country: 'India' },
        paymentId: 'seed_payment_002',
        status: 'Pending'
      }
    ]);

    console.log('Seed data imported successfully.');
    console.log('Admin: admin@vastram.in | Password: password123');
    console.log('Customer: aarav@example.com | Password: password123');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error(`Error importing seed data: ${error.message}`);
    await mongoose.disconnect();
    process.exit(1);
  }
};

importData();
