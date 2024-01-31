import React from "react";
import BASE_URL from "../utils/config";
import { toast } from "react-toastify";

const BookingCard = ({ booking }) => {
  const { tourName, totalPrice, maxGroupSize, date, _id } = booking;
  console.log(booking);
  const deleteBooking = async () => {
    try {
      const response = await fetch(`${BASE_URL}/booking/${_id}`, {
        method: "DELETE",
      });
      const { message } = await response.json();

      if (response.ok) {
        // toast.success(message)
        location.reload();
      } else {
        toast.error(message);
      }
    } catch (err) {
      toast.error("Server not responding");
    }
  };

  return (
    <>
      <tbody className="rounded overflow-hidden  py-8 px-3 bg-gray-100 shadow-lg">
        <tr className="w-full text-center overflow-hidden">
          <td className="tableData text-start">{tourName}</td>
          <td className="hidden md:block tableData">{maxGroupSize}</td>
          <td>{date}</td>
          <td>{totalPrice}</td>
          <td>
            <button
              onClick={deleteBooking}
              className="hidden md:block noCbtn bg-black my-2 mx-2 hover:bg-gray-900 "
            >
              Cancel Booking
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default BookingCard;
