import React from "react";
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import { FaStar } from "react-icons/fa";


const TourDetails = () => {
  const {id} = useParams();
  const tour = tourData.find(tour => tour.id === id);
  const {photo, title, desc, price, reviews, city, avgRating, distance, maxGroupSize} = tour;

  return (
  <section>
    <div>
      <div>
        <div>
          <div>
            <img src={photo} alt={title} />
            <div>
              <h2>{title}</h2>
              <div className="flex items-center gap-5">
              <div className='flex items-center gap-2'>
                <i><FaStar /></i>
                <span>{avgRating}  ({reviews.length})</span>        
              </div>
        
              </div>
            </div>
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
