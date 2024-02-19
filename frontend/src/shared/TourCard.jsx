import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import CalculateAvg from "../utils/CalculateAvg";

const TourCard = ({ tour }) => {
  const { photo, title, city, distance, price, desc, _id, reviews, featured } =
    tour;

  const { totalRating, avgRating } = CalculateAvg(reviews);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-[400px] flex flex-col">
      <div className="relative">
        <img className="w-full h-40 object-cover " src={photo} alt={title} />
        {featured === true ? (
          <p className="absolute pr-8 pl-4 text-white font-semibold py-1 bottom-2 rounded-l-full right-0 bg-BHoverColor text-lg">
            Featured
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="px-6 py-4  h-full">
        <div className="flex item-center text-center justify-between">
          <p className="text-base">{city}</p>
          <div className="flex items-center gap-2">
            <i>
              <FaStar />
            </i>
            <span>
              {avgRating} ({reviews.length})
            </span>
          </div>
        </div>
        <div className="font-bold text-lg mb-2 flex flex-col justify-between">
          <Link to={`/tours/${_id}`} className="py-2">
            {title.length > 20 ? title.substring(0, 20) + "..." : title}
          </Link>

          <p className="text-gray-700 text-base font-light overflow-hidden overflow-ellipsis">
            {desc.length > 80 ? desc.substring(0, 80) + "..." : desc}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 ">
        <p className="text-sm font-semibold mb-3">
          Starts From <br />
          <span className="text-xl">Rs. {price}</span>
        </p>
        <Link to={`/tours/${_id}`} className="btn text-sm">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
