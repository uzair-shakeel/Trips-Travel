import React, { useRef } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-toastify";
import BASE_URL from "../../utils/config";
import { useNavigate } from "react-router-dom";
import "./SeachhBar.css";

const SearchBar = () => {
  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(0);
  const cityRef = useRef(0);
  const navigate = useNavigate();

  const SubmitHandler = async () => {
    const minPrice = minPriceRef.current.value;
    const maxPrice = maxPriceRef.current.value;
    const searchTerm = cityRef.current.value;

    if (minPrice === "" || maxPrice === "" || searchTerm === "") {
      toast.error("Please fill all the fields");
    } else {
      const response = await fetch(
        `${BASE_URL}/tour/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      if (!response.ok) {
        toast.error("No Record Found!");
        navigate(
          `/tours/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
          { state: result.data }
        );
      }

      const result = await response.json();

      navigate(
        `/tours/search?search=${searchTerm}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
        { state: result.data }
      );
    }
  };

  return (
    <div>
      <div className="search-bar">
        <form className="form md:flex hidden items-center gap-4">
          <div className="form-group flex gap-3 md:form-group-fast">
            <span>
              <i>
                <FaPeopleGroup />
              </i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={cityRef}
              />
            </div>
          </div>
          <div className="form-group flex gap-3 md:form-group-fast">
            <span>
              <i>
                <IoIosPricetags />
              </i>
            </span>
            <div>
              <h6>Min Price</h6>
              <input type="number" placeholder="Mn. Price" ref={minPriceRef} />
            </div>
          </div>
          <div className="form-group flex gap-3 form-group-last">
            <span>
              <i>
                <IoIosPricetags />
              </i>
            </span>
            <div>
              <h6>Max Price</h6>
              <input type="number" placeholder="Max Price" ref={maxPriceRef} />
            </div>
          </div>
          <span
            className="search-icon bg-BaseColor rounded-lg cursor-pointer py-2 px-2"
            type="submit"
            onClick={SubmitHandler}
          >
            <i>
              <IoIosSearch size={30} className="text-white" />
            </i>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
