import Tour from "../models/Tour.js";

const getAllTours = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find()
      .sort({ createdAt: -1 })
      .populate("reviews")
      .skip(page * 12)
      .limit(12);

    res.status(200).json({ succes: true, data: tours, count: tours.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getSingleTour = async (req, res) => {
  try {
    const tourId = req.params.id;
    const tour = await Tour.findById(tourId).populate("reviews");

    if (!tour) {
      return res.status(404).json({ message: "Tour not found" });
    }

    res.status(200).json({
      success: true,
      data: tour,
      message: "Data Received Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createTour = async (req, res) => {
  try {
    const { title, city, desc, maxGroupSize, photo, address, price, distance } =
      req.body;

    const newTour = new Tour({
      title,
      city,
      photo,
      desc,
      maxGroupSize,
      address,
      distance,
      price,
    });
    await newTour.save();

    res
      .status(201)
      .json({ message: "Tour created successfully", data: newTour });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTour = async (req, res) => {
  try {
    const tourId = req.params.id;
    const { title, city, photo, desc, maxGroupSize, address, price, distance } =
      req.body;

    const newTour = await Tour.findByIdAndUpdate(
      tourId,
      { title, city, photo, desc, maxGroupSize, address, distance, price },
      { new: true }
    );

    if (!newTour) {
      return res.status(404).json({ message: "Tour not found" });
    }

    res.status(200).json({ message: "Tour Updated Successfully", newTour });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTour = async (req, res) => {
  try {
    const tourId = req.params.id;
    const deletedTour = await Tour.findByIdAndDelete(tourId);

    if (!deletedTour) {
      return res.status(404).json({ message: "Tour not found" });
    }

    res.status(200).json({ message: "Tour deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getTourBySearch = async (req, res) => {
  try {
    const searchTerm = req.query.search;
    const minPrice = parseInt(req.query.minPrice);
    const maxPrice = parseInt(req.query.maxPrice);

    if (!searchTerm && (isNaN(minPrice) || isNaN(maxPrice))) {
      return res
        .status(400)
        .json({ message: "Search term or price range is required" });
    }

    // Build the search criteria based on the provided parameters
    const searchCriteria = {};

    if (searchTerm) {
      if (typeof searchTerm !== "string") {
        return res
          .status(400)
          .json({ message: "Search term must be a string" });
      }
      searchCriteria.$or = [
        { title: { $regex: new RegExp(`${searchTerm}`, "i") } }, // Match substring in title
        { city: { $regex: new RegExp(`${searchTerm}`, "i") } }, // Match substring in city
      ];
    }

    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      searchCriteria.price = { $gte: minPrice, $lte: maxPrice };
    }

    // Perform the search
    const matchingTours = await Tour.find(searchCriteria).populate("reviews");

    if (matchingTours.length === 0) {
      return res.status(404).json({ message: "No matching tours found" });
    }

    res.status(200).json({
      success: true,
      data: matchingTours,
      count: matchingTours.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getFeaturedTour = async (req, res) => {
  try {
    const featuredTours = await Tour.find({ featured: true })
      .sort({ reviews: -1 })
      .populate("reviews")
      .limit(12);

    if (featuredTours.length === 0) {
      return res.status(404).json({ message: "No featured tours found" });
    }

    res.status(200).json({
      success: true,
      data: featuredTours,
      count: featuredTours.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getTourCount = async (req, res) => {
  try {
    // Get the total count of tours
    const tourCount = await Tour.countDocuments();

    res.status(200).json({ success: true, data: tourCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
};
