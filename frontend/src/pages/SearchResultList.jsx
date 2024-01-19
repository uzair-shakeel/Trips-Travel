import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'


const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state)

  console.log(data)
  return (
    <div>
       <section className='min-h-screen py-8 px-12'>
      <h1 className='font-semibold text-center py-5 text-3xl '>Search Result</h1>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.length === 0 ? (
              <h4>No Tour Found</h4>
            ) : (
              data?.map(tour => (
                <div key={tour._id}>
                  <TourCard tour={tour} />
                </div>
              ))
            )}
        </div>
      </section>
      <section>
        <div>
          <div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default SearchResultList
