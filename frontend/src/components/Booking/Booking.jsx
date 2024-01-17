import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6';
import {toast} from 'react-toastify'

const Booking = ({tour, avgRating}) => {
  const {price, reviews} = tour;
  const [data, setData] = useState({
    userId: '01',
    fullName: '',
    phone: '',
    guestsize: 1,
    bookAt: '',
    date: ''
  })

  const handleChange = (e) => {
    setData(prev => ({...prev, [e.target.id]:e.target.value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Your Trip has been Booked!')
    
    console.log(data)
  }

  return (
    <div className=''>
      <div className='flex justify-between items-center '>
        <h3 className='font-bold'>${price} <span>/per person</span></h3>
        <div className='flex items-center gap-2'>
                <i><FaStar /></i>
                <span>{avgRating}  ({reviews.length})</span>        
        </div>
      </div>

      <div className='py-6 space-y-4'>
        <h5 className='text-2xl font-semibold'>Booking Information</h5>
        <form onSubmit={handleSubmit}>
          <div>
            <input className='booking_input' type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
          </div>
          <div>
            <input className='booking_input' type="text" placeholder='Contact No.' id='phone' required onChange={handleChange} />
          </div>
          <div>
            <input className='booking_input' type="number" placeholder='Number of Persons?' id='guestSize' required onChange={handleChange} />
          </div>
          <div>
            <input className='booking_input' type="date" id='date' required onChange={handleChange} />
          </div>
          <div className='mt-12'>
          <div className='flex my-4 justify-between'>
            <span>Gross Price: </span>
            <p className='font-semibold'>Rs. {price}</p>
          </div>
          <div className='flex my-4 border-b-[1px] pb-2 border-black justify-between'>
            <span>GST: </span>
            <p className='font-semibold'>0%</p>
          </div>
          <div className='flex my-6 justify-between font-bold text-lg'>
            <span>Net Price: </span>
            <p>Rs. {price}</p>
          </div>
          </div>
          <button type='submit' className='btn w-full'>Book</button>
        </form>
      </div>
    </div>
  )
}

export default Booking
