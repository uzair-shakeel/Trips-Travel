import React, { useRef } from "react";
import BASE_URL from "../../utils/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SearchTours = () => {
  const cityRef = useRef(0);
  const navigate = useNavigate();

  const SubmitHandler = async () => {
    const searchTerm = cityRef.current.value;

    if (searchTerm === "") {
      toast.error("Please fill all the fields");
    } else {
      const response = await fetch(
        `${BASE_URL}/tour/search?search=${searchTerm}`
      );
      if (!response.ok) {
        toast.error("No Record Found!");
        navigate(`/tours/search?search=${searchTerm}`, { state: result.data });
      }

      const result = await response.json();
      navigate(`/tours/search?search=${searchTerm}`, { state: result.data });
    }
  };

  return (
    <div>
      <section className="pb-8">
        <div className="container text-center">
          <h2 className="heading">Find a Tour</h2>
          <div className="max-w-[570px] mt-[15px] mx-auto bg-gray-100  rounded-md flex items-center justify-between">
            <input
              type="search"
              ref={cityRef}
              className="py-4 pl-4 bg-transparent w-full focus:outline-none  placeholder:text-TextColor"
              placeholder="Search Doctor"
            />
            <button
              onClick={SubmitHandler}
              className="Searchbtn mt-0 rounded-[0px] rounded-r-md mx-2 hover:px-6"
            >
              Search
            </button>
          </div>
          <div className="max-w-[300px] mt-[15px] mx-auto">
            <input
              type="range"
              className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
              min="1000"
              max="10000"
              id="customRange2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchTours;
