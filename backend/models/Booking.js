// bookingModel.js

import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    
    // tourId: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'Tour',
    //     type: String
    //     required: true,
    // },
    userId: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'User',
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    tourName: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Booking', bookingSchema);
