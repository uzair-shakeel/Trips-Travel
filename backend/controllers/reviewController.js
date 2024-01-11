import Review from '../models/Review.js';
import Tour from '../models/Tour.js'

const createReview = async (req, res) => {
  try {
    const { username, rating, reviewText } = req.body;
    const tourId = req.params.tourId;

    // Validate required fields
    if (!tourId || !rating) {
      return res.status(400).json({ message: 'Tour ID and rating are required' });
    }

    // Find the corresponding tour
    const tour = await Tour.findById(tourId);

    if (!tour) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    // Create a new review
    const newReview = new Review({ tourId, reviewText, rating, username });
    await newReview.save();

    // Update the tour with the new review
    tour.reviews.push(newReview._id);
    await tour.save();

    res.status(201).json({ success: true, message: 'Review created successfully', newReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a review by ID
const deleteReview = async (req, res) => {
  try {
    const reviewId = req.params.id;

    // Validate review ID
    if (!reviewId) {
      return res.status(400).json({ message: 'Review ID is required' });
    }

    // Find and delete the review
    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200).json({ success: true, message: 'Review deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { createReview, deleteReview };
