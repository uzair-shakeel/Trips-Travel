import React from 'react'
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import avatar1  from '../../assets/images/ava-1.jpg'
import avatar2 from '../../assets/images/ava-2.jpg'
import avatar3  from '../../assets/images/ava-3.jpg'
// import avatar  from '../../assets/images/avatar.jpg'
import {HiStar} from 'react-icons/hi'



const Testimonial = () => {

    const testimonialsData = [
        {
            pic: avatar1,
            name: "John Doe",
          description: "Our trip with TripsTravel was nothing short of amazing! The attention to detail, friendly guides, and unforgettable experiences made it truly special. Can't wait for the next adventure!"
        },
        {
          pic: avatar2,
          name: "Jane Smith",
          description: "TripsTravel exceeded my expectations. From the scenic landscapes to the cultural encounters, every moment was a delight. The team's expertise and personalized service made the journey unforgettable."
        },
        {
          pic: avatar3,
          name: "Chris Johnson",
          description: "I've traveled with various agencies, but TripsTravel stands out. The seamless planning, knowledgeable guides, and unique destinations set them apart. An incredible way to explore the world!"
        },
        {
          pic: avatar1,
          name: "Emily Davis",
          description: "TripsTravel made our dream vacation a reality. The carefully crafted itinerary, diverse activities, and genuine hospitality created an experience we'll cherish forever. Highly recommended!"
        },
        {
          pic: avatar3,
          name: "Alex Turner",
          description: "A big shoutout to the TripsTravel team for an unforgettable journey. The blend of adventure and relaxation was perfect. I'll be booking my next trip with them without a doubt."
        }
      ];
      
      
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper 
      modules={[Pagination]} 
      spaceBetween={30} 
      autoplay={true}
      slidesPerView={1} 
      pagination={{clickable:true}}
      breakpoints={{
        640: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
      }}
      >

            {testimonialsData.map((data, index) => (
                
                <SwiperSlide key={index}>
            <div  className="py-[30px] px-5  rounded-3xl">
                <div className="flex items-center gap-[13px]">
                <div className='h-16 w-16 overflow-hidden border-solid border-orange-600 border-2 rounded-full'>
                <img  src={data.pic} alt="" className='object-cover w-full h-full  ' />
                </div>
                <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-HeadingColor">{data.name}</h4>
                <div className="flex items-center gap-[2px]">
                <HiStar className='w-[18px] h-5' />
                <HiStar className='w-[18px] h-5' />
                <HiStar className='w-[18px] h-5' />
                <HiStar className='w-[18px] h-5' />
                <HiStar className='w-[18px] h-5' />
            </div>
            </div>
            </div>

            <p className="text-[16px] leading-7 mt-4 text-TextColor font-[400]">
                {data.description}</p>
            </div>
        </SwiperSlide>
            ))}
            
        

      </Swiper>
    </div>
  )
}




export default Testimonial
