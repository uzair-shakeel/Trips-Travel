import express from 'express';
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

import { verifyAdmin, verifyToken, verifyUser } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all users
router.get('/users', verifyToken, verifyAdmin, getAllUsers);

// Get a single user by ID
router.get('/users/:id', verifyToken, verifyUser, getSingleUser);

// Update a user by ID
router.put('/users/:id', verifyToken, verifyUser, updateUser);

// Delete a user by ID
router.delete('/users/:id', verifyToken, verifyUser, deleteUser);

export default router;
