import React, { useRef, useState } from "react";
import {useParams} from 'react-router-dom'
import avatar from '../assets/images/avatar.jpg'
import tourData from '../assets/data/tours'
import { FaPeopleGroup, FaLocationDot } from "react-icons/fa6";
import { FaStar,FaMapPin, FaCity, FaDollarSign } from "react-icons/fa";
import CalculateAvg from '../utils/CalculateAvg'
import Booking from '../components/Booking/Booking'
import {toast} from 'react-toastify'

const TourDetails = () => {
  const reviewMsgRef = useRef();
  const [tourRating, setTourRating] = useState();
  const {id} = useParams();
  const tour = tourData.find(tour => tour.id === id);
  const {photo, title, desc, price, reviews, city, distance, maxGroupSize, address} = tour;
  const {totalRating, avgRating} = CalculateAvg(reviews)
  const options = { day: 'numeric', month: 'long', year: 'numeric'}

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value
    toast.success(`Text: ${reviewText}, Rating: ${tourRating}`)
    // alert(`${reviewText} ${tourRating}`)
  }

  return (
  <section className="my-4 mx-12">
    <div>
      <div>
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="max-w-3xl max-h-[400px]  rounded-md overflow-hidden">
              
            <img src={photo} alt={title}  />
            </div>
            <div className=" my-8 border-solid border-[2px] shadow-sm border-gray-200 rounded-md space-y-4 px-8 py-8 mx-auto">
              <h2 className="heading text-start">{title}</h2>
              <div className="flex items-center gap-12">
              <div className='flex items-center gap-2'>
                <i><FaStar /></i>
                <span>{avgRating}  ({reviews.length})</span>        
              </div>
              <div className='flex items-center gap-2'>
                <i><FaMapPin /></i>
                <span>{address}</span>        
              </div>
              </div>
              <div className="flex items-center gap-12">
              <div className="flex items-center gap-2">
              <i><FaCity /></i>
              <span>{city}</span>
              </div>
              <div className="flex items-center gap-2">
              <i><FaLocationDot /></i>
              <span>{distance}</span>
              </div>
              <div className="flex items-center gap-2">
              <i><FaDollarSign /></i>
              <span>Rs. {price}/per head</span>
              </div>
              <div className="flex items-center gap-2">
              <i><FaPeopleGroup /></i>
              <span>{maxGroupSize}</span>
              </div>
              </div>
              <h3>Description</h3>
              <p className="para">{desc}</p>
            </div>

            <div>
              <h3 className="">Reviews ({reviews.length} reviews)</h3>
              <form onSubmit={handleSubmit}>
                <div className="flex gap-1 my-2 text-orange-500">
                  <span className="cursor-pointer" onClick={() => setTourRating(1)}><i><FaStar /></i></span>
                  <span className="cursor-pointer" onClick={() => setTourRating(2)}><i><FaStar /></i></span>
                  <span className="cursor-pointer" onClick={() => setTourRating(3)}><i><FaStar /></i></span>
                  <span className="cursor-pointer" onClick={() => setTourRating(4)}><i><FaStar /></i></span>
                  <span className="cursor-pointer" onClick={() => setTourRating(5)}><i><FaStar /></i></span>
                </div>

              <div className="flex my-8 overflow-hidden gap-4 w-full  border-orange-500 border-[1px] rounded-full">
                <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" className="focus:outline-none flex-1 py-2 px-4 " />
                <button className="bg-orange-500 py-2  px-4 my-2 mx-2 text-white rounded-full" type="submit">Submit</button>
              </div>
              </form>

              <div>
                {reviews?.map(review => (
                  <div className="py-3 px-4">
                    <div className="flex items-center gap-4">
                    
                    <div className="w-12 h-12 rounded-full border-black border-[1px] overflow-hidden">
                    <img src={avatar} alt="" />

                    </div>
                    <div>
                      <div>
                        <div>
                          <h5 className="text-lg font-semibold">Muhmd</h5>
                          <p className="text-gray-700 text-sm">{new Date('01-18-2024').toLocaleDateString("en-US", options)}</p>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="flex items-center py-3 px-12 justify-between">
                      <h5 className="text-lg">Good Work</h5>
                      <div></div>
                      <span className='flex items-center gap-1'>5 <i><FaStar className='text-orange-500' /></i></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full px-6  rounded-md flex-shrink ">
              <Booking tour={tour} avgRating={avgRating} />
          </div>
        </div>
      </div>
    </div>
  </section>
  )

}

export default TourDetails;

// import React, { useState } from 'react'
// import tourImg from '../assets/images/gallery-04.jpg'
// import starIcon from '../assets/images/star.png'
// import Feedback from './Tour/TourFeedback'
// import DoctorAbout from './Tour/TourAbout'

// const TourDetails = () => {
//   const [tab, setTab] = useState('about')
//   return (
//     <section>
//       <div className='max-w-[1170px] px-5 mx-auto'>
//         <div className='grid '>
//           <div className='md:col-span-2'>
//             <div className="grid grid-cols-2 items-center gap-2">
//               <figure className="max-w-[90%] max-h-[600px]">
//                 <img src={tourImg} className='w-full' alt="" />
//               </figure>
//               <div className='py-6'> 
//                 <span className="bg-[#ebb487] text-SkyBlue py-1 px-6 lg:py-2 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
//                   Featured
//                 </span>
//                 <h3 className="text-HeadingColor mt-12 text-[34px] leading-9  font-bold">
//                   Tour Name
//                 </h3>
//                 <div className='flex items-center py-3 gap-[6px] '>
//                   <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-HeadingColor">
//                     <img src={starIcon} alt="" /> 4.8
//                   </span>
//                   <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-TextColor'>
//                     (272)
//                   </span>
//                 </div>
//                 <p className="paragraph text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, facilis.
//                 </p>
//               </div>
//             </div>

//             <div className='mt-[50px] border-b border-solid border-[#0066ff34]' >
//               <button onClick={() => setTab('about')}
//               className={`${ tab === "about" && "border-b border-solid border-Color"} py-2 px-5 mr-5 text-[16px] leading-7 text-HeadingColor font-semibold`}>
//               About
//               </button>
              
//               <button onClick={() => setTab('feedback')}
//               className={`${ tab === "feedback" && "border-b border-solid border-Color"} py-2 px-5 mr-5 text-[16px] leading-7 text-HeadingColor font-semibold`}>
//               Feedback
//               </button>


//             </div>

//             <div className="mt-[50px]">
//               {tab === 'about' && <DoctorAbout />}
//               {tab === 'feedback' && <Feedback />}
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default TourDetails
