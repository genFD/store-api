const getAllProducts = async (req, res) => {
  // throw new Error('testing error');
  res.status(200).json({ data: 'List of products' });
};
const getSingleProduct = async (req, res) => {
  res.status(200).json({ data: 'single product' });
};
export { getAllProducts, getSingleProduct };
