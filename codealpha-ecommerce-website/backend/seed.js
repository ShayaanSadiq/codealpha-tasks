// backend/seed.js
require('dotenv').config();
const { connect } = require('./config/db');
const Product = require('./models/Product');

async function run(){
  await connect(process.env.MONGO_URI);

  const sample = [
    { title:'Wireless Headphones', description:'Comfortable, long battery', price:1499, image:'https://m.media-amazon.com/images/I/51FNnHjzhQL._UF1000,1000_QL80_.jpg', stock:30 },
    { title:'Coffee Mug', description:'Ceramic 350ml', price:299, image:'https://m.media-amazon.com/images/I/81iiWil8DHL.jpg', stock:100 },
    { title:'USB-C Charger', description:'30W fast charging', price:899, image:'https://m.media-amazon.com/images/I/71cPa3L9RoL._UF1000,1000_QL80_.jpg', stock:50 }
  ];

  await Product.deleteMany({});
  await Product.insertMany(sample);
  console.log('Seeded products with images');
  process.exit();
}

run().catch(err=>{ console.error(err); process.exit(1); });
