import React from 'react'
import BASE_URL from '../utils/config';
import {toast} from 'react-toastify'

const BookingCard = ({booking}) => {
    const {tourName, totalPrice, maxGroupSize, date, _id} = booking;

    const deleteBooking = async()=> {
      try {
        const response = await fetch(`${BASE_URL}/booking/${_id}`, {
          method: 'DELETE',
        });
        const {message} = await response.json();
    
        if (response.ok) {
          // toast.success(message)
          location.reload();          
        } else{
          toast.error(message)
        }
    } catch(err){
      toast.error("Server not responding")
      
    }
  
    }
    
  
    return (
    <div className="max-w-sm  rounded overflow-hidden py-2 px-3 bg-gray-100 shadow-lg">
        <div className='flex h-[70%] flex-col'>
        <div className="font-bold text-lg mb-2">{tourName}</div>
        <p className="text-gray-700 text-base">Rs. {totalPrice}</p>
        <p className="text-gray-700 text-base">booked for {maxGroupSize}</p>
        <p className="text-gray-700 text-base">booked on {date}</p>

        </div>
      <div className='flex items-center flex-shrink justify-center my-3'>

      <button onClick={deleteBooking} className='noCbtn bg-black hover:bg-gray-900 w-full'>Cancel Booking</button>
      </div>
      
      </div>
  )
  
}

export default BookingCard
