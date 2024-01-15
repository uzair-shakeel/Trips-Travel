import React from 'react'
import { formatDate } from '../../utils/FormatDate'

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-HeadingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-SkyBlue font-bold text-[24px] leading-9">Mohmd Reee</span>
        </h3>
        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit corrupti iure veritatis quaerat quo rerum vel facilis at reprehenderit ad debitis, eligendi excepturi repudiandae, inventore illo reiciendis similique iste.</p>
      </div>

      <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-HeadingColor font-semibold'>Education</h3>
      
        <ul className='pt-4 md:p-5'>
          
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-SkyBlue text-[15px] leading-6 font-semibold'>
              {formatDate('10-02-2008')} - {formatDate('09-02-2011')}
              </span>
            <p className='text-[14px] leading-5 font-medium text-TextColor'>
              Bachelors in Medical 
            </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-TextColor'>
              University, Karachi. 
            </p>
          </li>
          
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-SkyBlue text-[15px] leading-6 font-semibold'>
              {formatDate('07-28-2013')} - {formatDate('07-27-2017')}
              </span>
            <p className='text-[14px] leading-5 font-medium text-TextColor'>
              PHD in Surgeon 
            </p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-TextColor'>
              Ibn-e-Sena Hospital, Karachi. 
            </p>
          </li>



        </ul>
      </div>

      <div className="mt-12">
        <h3 className='text-[20px] leading-[30px] text-HeadingColor font-semibold'>Experience</h3>
      
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>

          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-Yellow text-[15px] leading-6 font-semibold'>
            {formatDate('10-02-2008')} - {formatDate('10-02-2008')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-TextColor'>
              Sr. Surgeon
            </p>
            
            <p className='text-[16px] leading-6 font-medium text-TextColor'>
              Liaquat National, Karachi.
            </p>
          </li>

          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-Yellow text-[15px] leading-6 font-semibold'>
            {formatDate('10-02-2008')} - {formatDate('10-02-2008')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-TextColor'>
              Sr. Surgeon
            </p>
            
            <p className='text-[16px] leading-6 font-medium text-TextColor'>
              Liaquat National, Karachi.
            </p>
          </li>
          
        </ul>
      </div>


    </div>
  )
}

export default DoctorAbout
