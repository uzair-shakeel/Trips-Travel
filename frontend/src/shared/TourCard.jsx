import React from 'react'
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import CalculateAvg from '../utils/CalculateAvg';

const TourCard = ({tour}) => {
    const {photo, title, city, distance, price, desc, id, reviews} = tour;

    const {totalRating, avgRating} = CalculateAvg(reviews)
    
    return (
    <div className="max-w-sm  rounded overflow-hidden shadow-lg">
      <div className='relative'>
      <img className="" src={photo} alt={title} />
      <p className='absolute pr-8 pl-4 text-white font-semibold py-1 bottom-2 rounded-l-full right-0 z-10 bg-orange-600 text-lg'>Featured</p>
      </div>
      <div className="px-6 py-4">
        <div className='flex item-center text-center justify-between'>
        <p className=" text-base">{city}</p>
        <div className='flex items-center gap-2'>
        <i><FaStar /></i>
        <span>{avgRating}  ({reviews.length})</span>        
        </div>
        </div>
        <div className="font-bold text-lg mb-2"> <Link to={`/tours/${id}`} >{title}</Link></div>
        <p className="text-gray-700 text-base">{desc}</p>
        <div className='flex items-center justify-between'>
        <p className=" text-md font-semibold mb-3 ">Starts From  <br /><span className='text-2xl'>Rs. {price}</span></p>
        
        <Link to={`/tours/${id}`} className='py-2 px-3 font-semibold bg-orange-500 hover:bg-orange-300 rounded-md' >Book Now</Link>
      </div>
      </div>
    </div>

  )
}

export default TourCard
