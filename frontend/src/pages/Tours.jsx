import React, { useEffect, useState } from 'react'
import FeaturedTourList from '../components/featruredTour/FeaturedTourList'
import SearchBar from '../shared/searchBar/SearchBar'

const Tours = () => {
  const [pageCount, setPageCount] =useState(0);
  const [page, setPage] =useState(0);
  useEffect(() => {
    const pages = Math.ceil(5/1);
    setPageCount(pages)

  }, [page])

  return (
    <div>
      {/* <SearchBar /> */}
       <section className='min-h-screen py-8 px-12'>
      <h1 className='heading '>Featured Tours</h1>
      <p className='para'>"Embark on Unforgettable Journeys: Discover Our Featured Tours, Where Adventure Meets Extraordinary Experiences."</p>
        <div className=''>
          <FeaturedTourList />
        </div>
        <div className='flex pagination items-center justify-center mt-8 gap-3'>
          {[...Array(pageCount).keys()].map(number => (
            <span key={number} onClick={() => setPage(number)} className={page===number ? 'active_page' : 'spn'} >{number + 1}</span>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Tours
