import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be required'],
  },
  price: {
    type: Number,
    required: [true, 'product price must be required'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} not supported',
    },
    // enum: ['ikea', 'liddy', 'caressa', 'marcos'],
  },
});
const Product = mongoose.model('Product', ProductSchema);
export default Product;
