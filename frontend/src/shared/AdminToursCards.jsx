import React from 'react'
import BASE_URL from '../utils/config';
import useFetch from '../hooks/useFetch';
import {toast} from 'react-toastify'

const AdminToursCards = ({tour}) => {
    const {title,city, address, price, maxGroupSize, desc,featured,reviews, updatedAt, photo, _id} = tour;
    
  
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
                    <td ><button  className='Bluebtn  my-2 mx-2 '>Update</button></td>
                    <td ><button  className='Redbtn my-2 mx-2 '>Delete</button></td>
                  </tr>
                
              </tbody>
      </>
  )
  
}

export default AdminToursCards
