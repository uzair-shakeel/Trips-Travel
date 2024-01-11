import express from 'express';
import {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount
} from '../controllers/tourController.js';
import { verifyAdmin, verifyToken} from '../middleware/authMiddleware.js';


const router = express.Router();

router.get('/', getAllTours);
router.get('/search', getTourBySearch);
router.get('/featured', getFeaturedTour);
router.get('/count', getTourCount);
router.get('/:id', getSingleTour);
router.post('/', verifyToken, verifyAdmin, createTour);
router.put('/:id', verifyToken, verifyAdmin, updateTour);
router.delete('/:id', verifyToken, verifyAdmin, deleteTour);

export default router;
