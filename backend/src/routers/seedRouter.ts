import express from 'express';
import { seedController } from '../controllers/seedControllers';

export const seedRouter = express.Router();

seedRouter.get('/', seedController);
