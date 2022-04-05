import Product from '../models/products.model.js';

// @desc : get all products
// @route : Get api/products
// @access : public
const getAllProducts = async (req, res) => {
  const products = await Product.find(req.query);
  res.status(200).json({ nbHits: products.length, products });
};
// @desc : fetch single products
// @route : Get api/products
// @access : public
const getSingleProduct = async (req, res) => {
  const product = await Product.find({ _id: req.params.id });
  if (product) {
    res.status(200).json({ product });
  }
};
export { getAllProducts, getSingleProduct };
