import React from 'react';
import 'tailwindcss/tailwind.css';
import card01 from '../assets/images/gallery-01.jpg';
import card02 from '../assets/images/gallery-02.jpg';
import card03 from '../assets/images/gallery-03.jpg';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import SearchBar from '../shared/searchBar/SearchBar';
import ServicesList from '../components/services/ServicesList';
import FeaturedTourList from '../components/featruredTour/FeaturedTourList';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonials/Testimonial'
import faqImg from '../assets/images/experience.png'
import ImagesGallery from '../components/Gallery/Gallery';

const Home = () => {
  return (
    <>
    <div className="min-h-screen bg-cover  pt-4 px-12 bg-center">
     {/* {Search Section Starts} */}
      <div className='grid md:grid-cols-2   gap-8'>
          <div>
          <div className="my-8">
          <h1 className="text-[40px]  font-bold mb-4 ">
            Plan Your Perfect Trip with <span className='text-BaseColor'>TripsTravel</span>
          </h1>
          <p className="text-lg leading-8 text-gray-800">
          "Welcome to TripsTravel, your go-to destination for unforgettable adventures! Explore diverse destinations, plan seamlessly, and embark on a journey of a lifetime. Discover handpicked accommodations, connect with like-minded travelers, and create lasting memories. Your next adventure awaits with TripsTravel!"
          </p>
          <SearchBar />
          </div>

          </div>
          <div className='gap-4 grid md:grid-cols-3'>

              <div className='rounded-lg my-12 overflow-hidden'>
                <img src={card01} className='object-cover h-full' alt="" />
              </div>

              <div className='rounded-lg  overflow-hidden'>
                <img src={card02} className='object-cover h-full' alt="" />
              </div>

              <div className='rounded-lg my-12 overflow-hidden'>
                <img src={card03} className='object-cover h-full' alt="" />
              </div>
          </div>
      </div>
      </div>  


      {/* {Services Section Starts} */}
      <section className='pb-12 px-12 '>
       <div className="container mx-auto mt-8 flex">
      <div className="mb-6 flex-shrink-0 mx-4 flex-1 min-w-[30%]">
        <h2 className="text-[38px]  font-bold mb-4 text-BaseColor heading" >Our Best Services</h2>
        <p className='text-xl leading-7 '>"Empowering Your Journey: Unrivaled Services Tailored to Elevate Your Experience."</p>
        {/* Add Slider Component or Carousel Component if needed */}
      </div>
      <ServicesList className='flex-grow'  />
    </div>
      </section>
 
      {/* {Gallery Section Start} */}
      <section className='py-8 text-center px-12'>
      <h1 className="text-[40px]  font-bold  ">
            Our <span className='text-BaseColor'>Gallery</span>
          </h1>
          <p className="text-lg leading-8 mb-8 text-gray-800">
          "Unveil travel wonders in our gallery, a snapshot of TripsTravel's adventures."
          </p>        
        <ImagesGallery />
      </section>
      {/* {Gallery Section Ends} */}
      <section className='min-h-screen py-8 px-12'>
      <h1 className='heading '>Featured Tours</h1>
      <p className='para'>"Embark on Unforgettable Journeys: Discover Our Featured Tours, Where Adventure Meets Extraordinary Experiences."</p>
        <div className=''>
          <FeaturedTourList />
        </div>
      </section>
      {/* {Featured seactiton ends} */}


      {/* {Testimonials section start} */}
      <section>
      <div className="py-8 px-12">
      <div className="mx-auto text-center xl:w-[470px]">
      <h1 className="text-[40px]  font-bold  ">
            Our <span className='text-BaseColor'>Reviews</span>
          </h1>
          <p className="text-lg leading-8 mb-8 text-gray-800">
          "Read what our travelers have to say in their own words. Real stories, real experiences."
          </p> 
        </div>
        <Testimonial />
      </div>
    </section>
      {/* {Testimonials section ends} */}

      {/* {faq Section Start} */}
      <section>
      <div className="px-12 py-6">
        <div className="flex justify-between gap-[50px] lg:gap-0">
          <div className="w-1/2 hidden md:block">
            <img src={faqImg} alt="" />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl text-BaseColor font-bold text-center">Frequently Asked Question.</h2>

            <FaqList />
          </div>
        </div>
      </div>
    </section>
      {/* {faq Section ends} */}
    </>
  );
};

export default Home;
