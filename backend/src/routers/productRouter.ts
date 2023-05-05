import express from 'express';
import {
  getProducts,
  getProductCategories,
  getProductBySlug,
} from '../controllers/productControllers';

export const productRouter = express.Router();

productRouter.get('/', getProducts);

productRouter.get('/categories', getProductCategories);

productRouter.get('/slug/:slug', getProductBySlug);
