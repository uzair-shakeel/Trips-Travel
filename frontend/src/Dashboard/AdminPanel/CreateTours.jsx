import React, { useState, useContext} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../utils/config'
import {AuthContext} from '../../context/AuthContext'

const CreateTours = () => {
  const navigate = useNavigate();
  const {user, token} = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
      title: '',
      city: '',
      desc: '',
      address: '',
      price: 0,
      maxGroupSize: 1,
      photo: '',
      distance: 0,
      featured: false
    })

    
      const handleInput = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
        
      }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    try {
      const response = await fetch(`${BASE_URL}/tour`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData),
      });
      const {message} = await response.json();
  
      if (response.ok) {
        toast.success(message)
        navigate('/all-tours')
      } else{
        toast.error(message)
      }
  } catch(err){
    toast.error("Server not responding")
  }
}


  return (
    <div className="min-h-screen md:min-h-[400px] flex items-center justify-center bg-gray-100">
      <div className="bg-white mx-6 p-6 md:p-8 rounded-lg text-center shadow-md w-full max-w-xl m-8 md:max-w-[80%] ">
        
        
        {/* Sign Up Form */}
        <div className="flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Create Tour</h2>
            <p className="text-sm md:text-base text-GrayColor">Create a new tour by filling the all fields.</p>
          </div>

        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
          
      <div className='md:grid grid-cols-2 gap-8'>
          <div>
            <label htmlFor="" className="block  text-md md:text-lg font-medium text-GrayColor">Title</label>
            <input
              type="text"
              name='title'
              placeholder="Enter Tour Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
              value={formData.title}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label htmlFor="" className="block text-md md:text-lg font-medium text-GrayColor">City</label>
            <input
              type="text"
              name='city'
              placeholder="Enter City Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
              value={formData.city}
              onChange={handleInput}
              required
            />
          </div>
        
        </div>
      <div className='md:grid grid-cols-3 gap-8'>
        
      <div>
            <label htmlFor="" className="block text-md md:text-lg font-medium text-GrayColor">Price</label>
            <input
              type="number"
              name='price'
              placeholder="Enter Price"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
              value={formData.price}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label htmlFor="" className="block text-md md:text-lg font-medium text-GrayColor">Max Peoples</label>
            <input
              type="number"
              name='maxGroupSize'
              placeholder="Enter Max Peoples per Trip Tour"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
              value={formData.maxGroupSize}
              onChange={handleInput}
              required
            />
          </div>

                    <div>
            <label htmlFor="" className="block text-md md:text-lg font-medium text-GrayColor">Distance</label>
            <input
              type="number"
              name='distance'
              placeholder="Enter Total Distance"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
              value={formData.distance}
              onChange={handleInput}
              
            />
          </div>
          
        </div>

          <div>
            <label htmlFor="" className="block text-md md:text-lg font-medium text-GrayColor">Address</label>
            <input
              type="text"
              name='address'
              placeholder="Enter Destination Address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
              value={formData.address}
              onChange={handleInput}
              required
            />
          </div>

          <div>
            <label htmlFor="" className="block text-md md:text-lg font-medium text-GrayColor">Description</label>
            <input
              type="text"
              name='desc'
              placeholder="Enter Description"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
              value={formData.desc}
              onChange={handleInput}
              
            />
          </div>

          <div>
            <label htmlFor="" className="block text-md md:text-lg font-medium text-GrayColor">Photo URL</label>
            <input
              type="text"
              name='photo'
              placeholder="Enter Picture URL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-GreenColor"
              value={formData.photo}
              onChange={handleInput}
              required
            />
          </div>


          
          <div className='flex items-center justify-between mb-3'>
            <label htmlFor="" className='text-TextColor text-[15px] font-semibold leading-7 px-4'>
              Featured 
              <select name="featured" value={formData.featured} onChange={handleInput} className='text-TextColor text-[15px] leading-7 px-4 py-3 focus:outline-none' >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="w-full Greenbtn my-3"
              disabled={isLoading}
            >
              {isLoading ? 'Creating...' : 'Create'}
            </button>
          </div>
        </form>
        </div>

      </div>
    </div>
  );
};

export default CreateTours;
