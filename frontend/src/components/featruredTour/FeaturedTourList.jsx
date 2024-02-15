import React from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../utils/config";
import TourCard from "../../shared/TourCard";

const FeaturedTourList = () => {
  const { apiData: featuredToursData, error } = useFetch(
    `${BASE_URL}/tour/featured`
  );

  return (
    <>
      {error && <h4>{error}</h4>}
      {!error && (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredToursData?.map((tour) => (
            <div className="" key={tour._id}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedTourList;
