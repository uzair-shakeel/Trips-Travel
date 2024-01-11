import express from 'express';
import { createReview, deleteReview } from '../controllers/reviewController.js';
import { verifyUser } from '../middleware/authMiddleware.js';
const router = express.Router();


// Create a new review
router.post('/:tourId', verifyUser, createReview);

// Delete a review by ID
router.delete('/:id', verifyUser, deleteReview);

export default router;
