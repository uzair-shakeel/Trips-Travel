import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'

const FeaturedTourList = () => {
  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {tourData?.map(tour => (
        <div className='' key={tour.id}>
            <TourCard tour={tour} />
        </div>
      ))}
    </div>
  )
}

export default FeaturedTourList
