import React, { useEffect, useState } from "react";
import FeaturedTourList from "../components/featruredTour/FeaturedTourList";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../utils/config";
import TourCard from "../shared/TourCard";
import SearchTours from "../components/Search/SearchTours";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { apiData: tours, error } = useFetch(`${BASE_URL}/tour?page=${page}`);
  const { apiData: tourCount } = useFetch(`${BASE_URL}/tour/count`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 12);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <div>
      <SearchTours />
      <section className="min-h-screen py-8 px-6 md:px-12">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tours?.map((tour) => (
            <div key={tour._id}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
        <div className="flex pagination items-center justify-center mt-8 gap-3">
          {pageCount &&
            [...Array(pageCount).keys()].map((number) => (
              <span
                key={number}
                onClick={() => setPage(number)}
                className={page === number ? "active_page" : "spn"}
              >
                {number + 1}
              </span>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;
