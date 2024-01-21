import React, {useContext, useState} from 'react'
import { AuthContext } from '../../context/AuthContext'
import {toast} from 'react-toastify'
import avatar from '../../assets/images/avatar.jpg'
import Bookings from './Bookings'
import BASE_URL  from '../../utils/config'
import token  from '../../utils/token'

const MyAccount = () => {
  const {user, dispatch} = useContext(AuthContext)
  const [tab, setTab] = useState('bookings')  
  console.log(user._id)
  const deleteAccount = async()=> {
    try {
      const response = await fetch(`${BASE_URL}/user/users/${user._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const {message} = await response.json();
  
      if (response.ok) {
        dispatch({ type: "LOGOUT"})
        toast.success(message)
        
      } else{
        toast.error(message)
      }
  } catch(err){
    toast.error("Server not responding")
    
  }

  }
  
  
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>

      <div className='grid md:grid-cols-3 gap-10'>
        <div className='py-[50px] px-[30px] rounded-md'>
          <div className='flex items-center justify-center'>
            <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-Color'>
              <img src={user.photo || avatar} alt="" className='w-full h-full rounded-full' />
            </figure>
          </div>

          <div className='text-center mt-4'>
            <h3 className='text-[18px] leading-[30px] text-HeadingColor font-bold'>{user.username}</h3>
            <p className="text-TextColor text-[15px] leading-6 font-medium">{user.email}</p>
          </div>

          <div className='mt-[50px] md:mt-[70px]'>
            <button  className='w-full mb-2 btn'>Update Name</button>
            <button onClick={deleteAccount} className='w-full bg-black noCbtn hover:bg-gray-900 '>Delete Account</button>
          </div>
        </div>

        <div className='md:col-span-2 md:px-[30px] '>
          <div>
            <button onClick={() => setTab('bookings')} className={`${tab==='bookings' && 'bg-GrayColor text-white font-bold'} p-2 mr-5 px-5 rounded-md text-HeadingColor font-semibold text-[16px] leading-7 border border-solid border-Color`}>My Bookings</button>
            <button onClick={() => setTab('settings')} className={`${tab==='settings' && 'bg-GrayColor text-white font-bold'} p-2 mr-5 px-5 rounded-md text-HeadingColor font-semibold text-[16px] leading-7 border border-solid border-Color`}>Profile Settings</button>
          </div>
          {tab==='bookings' && <Bookings />}
          {/* {tab==='settings' && <Profile user={userData}/>} */}
        
        </div>
      </div>
    </div>
    </section>
  )
}

export default MyAccount
