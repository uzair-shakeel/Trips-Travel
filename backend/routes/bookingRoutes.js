// bookingRoutes.js

import express from 'express';
import { createBooking, getBooking, getAllBookings, deleteBooking } from '../controllers/bookingController.js';

const router = express.Router();

// Create a new booking
router.post('/', createBooking);

// Get a specific booking by ID
router.get('/:id', getBooking);
router.delete('/:id', deleteBooking);

// Get all bookings
router.get('/', getAllBookings);

export default router;
