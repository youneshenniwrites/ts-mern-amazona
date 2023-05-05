import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { ProductModel } from '../models/productModel';

export const getProducts = asyncHandler(async (_req, res) => {
  const products = await ProductModel.find();
  res.json(products);
});

export const getProductCategories = asyncHandler(
  async (_req: Request, res: Response) => {
    const categories = await ProductModel.find().distinct('category');
    res.json(categories);
  }
);

export const getProductBySlug = asyncHandler(async (req, res) => {
  const product = await ProductModel.findOne({ slug: req.params.slug });
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product Not Found' });
  }
});
