import React from 'react'
import BASE_URL from '../utils/config';
import {toast} from 'react-toastify'

const BookingCard = ({booking}) => {
    const {tourName, fullName, userId, phone, totalPrice, maxGroupSize, date, createdAt, _id} = booking;
    
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
      <>

              <tbody className='rounded overflow-hidden py-8 px-3 bg-gray-100 shadow-lg '>
                
                  <tr className='w-full text-center overflow-hidden'>
                    <td className="tableData text-start">{tourName}</td>
                    <td className='tdFont'>{fullName}</td>
                    <td className='tdFont'>{userId}</td>
                    <td className='tdFont'>{maxGroupSize}</td>
                    <td className='tdFont'>{phone}</td>
                    <td className='tdFont'>{date}</td>
                    <td className='tdFont'>{createdAt}</td>
                    <td className='tdFont'>{totalPrice}</td>
                    <td ><button onClick={deleteBooking} className='Redbtn my-2 mx-2 '>Completed</button></td>
                  </tr>
                
              </tbody>
      </>
  )
  
}

export default BookingCard
