import React, { useState } from 'react'
import {formatDate} from '../../utils/FormatDate'
import avatar from '../../assets/images/ava-1.jpg'
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './TourFeedbackFrom'

const Feedback = () => {
  const [feedbackForm, setFeedbackForm] = useState(false)

  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text=[20x] leading-[30px] font-bold text-HeadingColor mb-[30px]'>
          All reviews (272)
        </h4>

        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img src={avatar} className='w-full' alt="" />
            </figure>

            <div>
              <h5 className='text-[16px] leading-6 text-Color font-bold'>
                Ali Hussain
              </h5>
              <p className='text-[14px] leading-6 text-TextColor'>
              {formatDate('10-02-2008')}
              </p>
              <p className='paragraph mt-3 font-medium text-[15px]'>Highly Recommended.</p>
            </div>
          </div>

          <div className='flex gap-1'>
            {[ ...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color='0067FF' />
            ))}
          </div>
        </div>
      </div>   

              {!feedbackForm && (
                <div className='text-center'>
                <button className='btn' onClick={() => setFeedbackForm(true)}>Give Feedback</button>
                </div>   
              )}

              {feedbackForm && <FeedbackForm />}
    </div>
  )
}

export default Feedback
