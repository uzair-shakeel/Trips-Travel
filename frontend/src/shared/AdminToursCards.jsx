import React, { useState } from 'react'
import BASE_URL from '../utils/config';
import useFetch from '../hooks/useFetch';
import {toast} from 'react-toastify'
import UpdateTours from '../Dashboard/AdminPanel/UpdateTour';
import { Link } from 'react-router-dom';




const AdminToursCards = ({tour}) => {
  const [update, setUpdate] = useState(false);
  const {title,city, address, price, maxGroupSize, desc,featured,reviews, updatedAt, photo, _id} = tour;

  const deleteTour = async()=> {
    try {
      const response = await fetch(`${BASE_URL}/tour/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const {message} = await response.json();
  
      if (!response.ok) {
        toast.error(message)
      } else{
        toast.success(message)
        // window.location.reload();
      }
  } catch(err){
    toast.error("Server not responding")
    
  }
  
  }
  
  
    return (
      <>
              <tbody className='rounded overflow-hidden py-8 px-3 bg-gray-100 shadow-lg '>
                
                  <tr className='w-full text-center overflow-hidden px-4'>
                    <td className='py-2 object-cover overflow-hidden px-2'><img src={photo} alt="" className='object-cover h-[65px] w-[95px] rounded-xl py-2 px-2'  /> </td> 
                    {/* <td className='tdFont'>{photo}</td> */}
                    <td className="tableData text-start">{title}</td>
                    <td className='tdFont'>{city}</td>
                    <td className='tdFont'>{featured}</td>
                    <td className='tdFont'>{maxGroupSize}</td>
                    <td className='tdFont'>{reviews.length}</td>
                    <td ><button  className='Greenbtn  my-2 mx-2 '>View</button></td>
                    <td ><Link to={`/update-tour?tour=${tour._id}`} className='Bluebtn  my-2 mx-2 '>Update</Link></td>
                    <td ><button onClick={deleteTour} className='Redbtn my-2 mx-2 '>Delete</button></td>
                  </tr>
                
              </tbody>
      </>
  )
  
}

export default AdminToursCards
