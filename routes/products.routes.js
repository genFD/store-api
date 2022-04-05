import express from 'express';
import { getAllProducts, getSingleProduct } from '../controllers/product.js';

const productsRouter = express.Router();

productsRouter.route('/').get(getAllProducts);
productsRouter.get('/:id', getSingleProduct);

export default productsRouter;
