// bookingRoutes.js

import express from 'express';
import { createBooking, getBooking, getAllBookings } from '../controllers/bookingController.js';

const router = express.Router();

// Create a new booking
router.post('/', createBooking);

// Get a specific booking by ID
router.get('/:id', getBooking);

// Get all bookings
router.get('/', getAllBookings);

export default router;
