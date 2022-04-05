import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './db/config.js';
import Product from './models/products.model.js';
import products from './products.js';

dotenv.config();
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(products);
    console.log('Data Imported!'.green.inverse);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
