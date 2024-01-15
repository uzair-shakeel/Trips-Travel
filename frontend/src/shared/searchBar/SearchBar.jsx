import React, { useRef } from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { RiFindReplaceFill } from "react-icons/ri";
import {toast} from 'react-toastify'

  const SearchBar = () => {
  const minPriceRef = useRef(0);
  const maxPriceRef = useRef(0);
  const peopleRef = useRef(0);

  const SubmitHandler = () => {
    const minPrice = minPriceRef.current.value;
    const maxPrice = maxPriceRef.current.value;
    const people = peopleRef.current.value;

    if (minPrice === '' || maxPrice === '' || people === '') {
      toast.error('Please fill all the fields')
      
    } else {
      toast.success('Form submitted successfully');
    }
};
  return (
    <form className='mt-8 grid grid-cols-4 gap-2 items-center'>
      <divGroup className='overflow-hidden'>
          <div className='flex gap-2 items-center'>
          <FaPeopleGroup className='h-6 w-6' />
            <h1 className='font-semibold '>No. of Peoples</h1>
          </div>
            <input type="number" ref={peopleRef} className='py-2 my-2 px-4 bg-gray-200 focus:outline-none rounded-full ' 
            placeholder='persons?' />
      </divGroup>
      <divGroup className='overflow-hidden '>
          <div className='flex gap-2 items-center'>
          <IoIosPricetags  className='h-6 w-6' />
            <h1 className='font-semibold '>Min. Price</h1>
          </div>
            <input type="number" ref={minPriceRef} className='py-2 my-2 px-4 bg-gray-200 focus:outline-none rounded-full ' 
            placeholder='min. Amount' />
      </divGroup>
      <divGroup className='overflow-hidden'>
          <div className='flex gap-2 items-center'>
          <IoIosPricetags className='h-6 w-6' />
            <h1 className='font-semibold '>Max. Price</h1>
          </div>
            <input type="number" ref={maxPriceRef} className='py-2 my-2 px-4 bg-gray-200 focus:outline-none rounded-full ' 
            placeholder='max. Amount' />
      </divGroup>
      <divGroup className='overflow-hidden'>
          
          <RiFindReplaceFill onClick={SubmitHandler} className='h-10 w-10 cursor-pointer text-orange-600'  />
          
      </divGroup>
    </form>
  )
}

export default SearchBar
