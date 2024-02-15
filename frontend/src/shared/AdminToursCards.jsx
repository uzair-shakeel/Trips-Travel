import React, { useContext, useState } from "react";
import BASE_URL from "../utils/config";
import useFetch from "../hooks/useFetch";
import { toast } from "react-toastify";
import UpdateTours from "../Dashboard/AdminPanel/UpdateTour";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaEdit, FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const AdminToursCards = ({ tour }) => {
  const { token } = useContext(AuthContext);

  const {
    title,
    city,
    address,
    price,
    maxGroupSize,
    desc,
    featured,
    reviews,
    updatedAt,
    photo,
    _id,
  } = tour;

  const handleDelete = () => {
    // Display a confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this Tour Permanently?"
    );

    // Check if the user confirmed the action
    if (isConfirmed) {
      // Code to delete the item
      deleteTour();
    }
  };

  const deleteTour = async () => {
    try {
      const response = await fetch(`${BASE_URL}/tour/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const { message } = await response.json();

      if (!response.ok) {
        toast.error(message);
      } else {
        alert(message);
        window.location.reload();
      }
    } catch (err) {
      toast.error("Server not responding");
    }
  };

  return (
    <>
      <tbody className="rounded overflow-hidden py-8 px-3 bg-gray-100 shadow-lg ">
        <tr className="w-full text-center overflow-hidden px-4">
          <td className="py-2 object-cover overflow-hidden px-2">
            <img
              src={photo}
              alt=""
              className="object-cover h-[65px] w-[95px] rounded-xl py-2 px-2"
            />{" "}
          </td>
          {/* <td className='tdFont'>{photo}</td> */}
          <td className="tableData text-start">{title}</td>
          <td className="tdFont">{city}</td>
          <td className="tdFont">{featured === "true" ? "Yes" : "No"}</td>
          <td className="tdFont">{maxGroupSize}</td>
          <td className="tdFont">{reviews.length}</td>
          {/* <td>
            <Link to={`/tours/${tour._id}`} className="Greenbtn  my-2 mx-2 ">
              View
            </Link>
          </td> */}
          <td className="flex gap-2 w-full my-6">
            <Link
              to={`/update-tour/${tour._id}`}
              className="text-blue-500 hover:scale-125 hover:rotate-12 duration-200 hover:text-blue-900"
            >
              <FaEdit size={25} />
            </Link>
            /
            <button
              onClick={handleDelete}
              className="text-red-500 hover:scale-125 hover:rotate-12 duration-200 hover:text-red-900"
            >
              <MdDelete size={25} />
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default AdminToursCards;
