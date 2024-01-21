import React, {useContext, useEffect, useState} from 'react'
import {token, BASE_URL} from '../../config'
import convertToBase64 from '../../utils/cloudinary'
import {toast} from 'react-toastify'
import { AuthContext } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

const Profile = ({user}) => {
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)
  const [pic, setPic] = useState('')
  const handlePhoto = async(e) => {
    try {
      const file = e.target.files[0]
        const base64 = await convertToBase64(file);
        setPic(base64);
        
        setFormData(prevFormData => ({ ...prevFormData, photo: base64 }))
    } catch (error) {
        console.error("Error converting to Base64:");
    }
}
    // const [URL, setURL] = useState('')
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      photo: pic,
      gender:'',
      role:'',
      bloodType: ''
    })
    
    useEffect(() => {
      setFormData({name:user.name, role:user.role, email:user.email, photo:user.photo, gender:user.gender, bloodType:user.bloodType})
      
    }, [user])


      const handleInput = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
        
      }



  const submitHandler = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${BASE_URL}/user/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      const {message} = await response.json();
  
      if (response.ok) {
        
        dispatch({type: "UPDATE_USER", 
        payload: {
          user: response.data,
          token: response.token,
        }})
        toast.success(message)  
      } else{
        toast.error(message)
      }
  } catch(err){
    toast.error("Server not responding")
  }
}

  return (
    <div className='mt-6'>
       <form action="" onSubmit={submitHandler}>
          <div className='my-4'>
            <input type="text" placeholder='Name' name='name' value={formData.name} onChange={handleInput}
            required className='w-full px-4 py-3 focus:outline-none border-b border-solid focus:border-b-Color' />
          </div>
          <div className='my-4'>
            <input type="email" placeholder='Email' name='email' value={formData.email} onChange={handleInput}
            required className='w-full px-4 py-3 focus:outline-none border-b border-solid focus:border-b-Color' />
          </div>
          <div className='my-4'>
            <input type="text" placeholder='Blood Group' name='bloodType' value={formData.bloodType} onChange={handleInput}
            required className='w-full px-4 py-3 focus:outline-none border-b border-solid focus:border-b-Color' />
          </div>

          <div className='flex items-center justify-between mb-3'>
            <label htmlFor="" className='text-TextColor font-bold text-[15px] leading-7 px-4'>
              Gender 
              <select name="gender" value={formData.gender} onChange={handleInput} className='text-TextColor  text-[15px] leading-7 px-4 py-3 focus:outline-none' >
                <option value="select">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className='mb-1 flex items-center gap-3'>
            {user.photo && <figure className='w-[45px] h-[45px] rounded-full border-2 border-solid border-Color  flex items-center justify-center '>
              <img src={user.photo} alt="" className='w-full rounded-full' />
            </figure>}

            <div className='relative w-[120px] h-[40px]'>
              <input className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
              type="file" name='photo' id='customFile' accept='.png, .jpg, .jpeg' onChange={handlePhoto} />
            
              <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center
              px-[.75rem] py-[.375rem] text-center text-[15px] leading-6 overflow-hidden cursor-pointer text-HeadingColor font-semibold rounded-lg truncate bg-blue-100' >Upload Photo</label>
            </div>
          </div>

          <div>
            <button className="btn w-full rounded-md">Update Now</button>
          </div>
        </form>
    </div>
  )
}

export default Profile
