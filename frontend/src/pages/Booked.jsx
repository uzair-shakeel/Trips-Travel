import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Booked = () => {
  return (
    <div>
      <div className='flex items-center flex-col justify-center min-h-[400px]'>
        <i><FaCheckCircle size={45} className='text-green-600 ' /></i>
        <h2 className='text-green-600  font-bold'>Congratulations...!</h2>
        <h5 className='font-semibold text-[20px] pb-9'>Your Tour has been booked!</h5>
        <Link className='noCbtn bg-green-600' to='/home'>Back to the Home Page</Link><button ></button>
      </div>
    </div>
  )
}

export default Booked