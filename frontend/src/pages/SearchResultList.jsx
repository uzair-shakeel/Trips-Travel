import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TourCard from "../shared/TourCard";
import SearchTours from "../components/Search/SearchTours";

const SearchResultList = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(location.state || []); // Update data whenever location.state changes
  }, [location.state]);

  return (
    <div>
      <section className="min-h-screen pb-8 px-12">
        <SearchTours />
        <h1 className="font-semibold text-center py-5 text-3xl ">
          Search Result
        </h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.length === 0 ? (
            <h4>No Tour Found</h4>
          ) : (
            data?.map((tour) => (
              <div key={tour._id}>
                <TourCard tour={tour} />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchResultList;
