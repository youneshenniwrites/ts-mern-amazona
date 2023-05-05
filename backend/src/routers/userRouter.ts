import express from 'express';
import { isAuth } from '../utils';
import {
  signInUserController,
  signUpUserController,
  updateUserProfileController,
} from '../controllers/userControllers';

export const userRouter = express.Router();

userRouter.post('/signin', signInUserController);

userRouter.post('/signup', signUpUserController);

userRouter.put('/profile', isAuth, updateUserProfileController);
