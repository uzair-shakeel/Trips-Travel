import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const FeedbackForm = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewText, setReviewText] = useState('')

  const handleReview = async (e) => {
    e.preventDefault();
  }

  return (
    <form action="">
      <div>
        <h3 className='text-HeadingColor text-[16px] leading-6 font-semibold mb-4'>
          Help us to improve our service.
        </h3>

        <div>
          {[ ...Array(5).keys()].map((_, index) => {
            index+=1;

            return(
              <button 
              key={index}
              type='button'
              className={`${
                index <= ((rating && hover) || hover) ? 'text-Yellow' : 'text-gray-400'
              } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
              onClick={() => setRating(index)}
              onMouseEnter={() => setRating(index)}
              onMouseLeave={() => setHover(rating)}
              onDoubleClick={() => {
                setHover(0);
                setRating(0);
              }}
              >
                <span>
                  <AiFillStar />
                </span>

              </button>
            )
          })}
        </div>
      </div>

      <div className='mt-[30px]'>
      <h3 className='text-HeadingColor text-[16px] leading-6 font-semibold mb-4'>
          Share your Feedback with us.
        </h3>

        <textarea rows='5' placeholder='Write a review' onChange={(e) => setReviewText(e.target.value)}
        className='border border-solid focus:outline-Color w-full border-[#0066ff34] px-4 py-3 '></textarea>
      </div>
      <button className="btn" onClick={handleReview}>
        Submit
      </button>
    </form>
  )
}

export default FeedbackForm
