import React, {useContext} from 'react'
import useFetch from '../../hooks/useFetch'
import BASE_URL from '../../utils/config'
import { AuthContext } from '../../context/AuthContext'
import BookingCard from '../../shared/BookingCard'

const Bookings = () => {
  const {user} = useContext(AuthContext);
  const {apiData: bookings} = useFetch(`${BASE_URL}/booking/${user._id}`);


  return (
    <div className='py-8'>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
      {bookings?.map(booking => (
        <BookingCard booking={booking} key={booking._id} />
        ))}
    </div>
        {/* { bookings !== null ? 
  :
        <p className='my-3 text-cent'>You didn't have any appointments.</p>
      } */}
      </div>
  )
}

export default Bookings
