import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import useFetch from '../../hooks/useFetch'
import BASE_URL from '../../utils/config'


const FeaturedTourList = () => {
  const {apiData: featuredToursData, error} = useFetch(`${BASE_URL}/tour/`)
  
  // console.log(featuredToursData)
  return (
<>
    {error && <h4>{error}</h4>  }
    {!error  && <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {featuredToursData?.map(tour => (
        <div className='' key={tour._id}>
            <TourCard tour={tour} />
        </div>
      ))}
    </div>}
</>
  )
}

export default FeaturedTourList
