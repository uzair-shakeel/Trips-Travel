import React, { useEffect, useState } from 'react'
import FeaturedTourList from '../components/featruredTour/FeaturedTourList'
import SearchBar from '../shared/searchBar/SearchBar'
import useFetch from '../hooks/useFetch'
import  BASE_URL  from '../utils/config'
import TourCard from '../shared/TourCard'

const Tours = () => {
  const [pageCount, setPageCount] =useState(0);
  const [page, setPage] =useState(0);
  const {apiData: tours, error} = useFetch(`${BASE_URL}/tour?page=${page}`)
  const {apiData: tourCount} = useFetch(`${BASE_URL}/tour/count`)
  
  useEffect(() => {
    const pages = Math.ceil(tourCount/12);
    setPageCount(pages)
    window.scrollTo(0,0)
  }, [page, tourCount, tours])

  return (
    <div>
      {/* <SearchBar /> */}
       <section className='min-h-screen py-8 px-12'>
      <h1 className='heading '>Tours</h1>
      <p className='para'>"Embark on Unforgettable Journeys: Discover Our Featured Tours, Where Adventure Meets Extraordinary Experiences."</p>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {tours?.map(tour => (
            <div key={tour._id}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
        <div className='flex pagination items-center justify-center mt-8 gap-3'>
        {pageCount && [...Array(pageCount).keys()].map(number => (
        <span key={number} onClick={() => setPage(number)} className={page===number ? 'active_page' : 'spn'} >{number + 1}</span>
        ))}

        </div>
      </section>

    </div>
  )
}

export default Tours
