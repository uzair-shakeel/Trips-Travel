import React, { useState } from 'react'


const FaqCard = ({item}) => {
  const [open, setOpen] = useState(false);

  const togglebtn = () => {
    setOpen(!open);
  }
  return (
    <div className='p-2 lg:p-3 rounded-[12px] border border-solid border-[#D9DCE2] mb-3 cursor-pointer'>
      <div className='flex items-center justify-between gap-5 transition-opacity duration-700 ease-in-out' onClick={togglebtn} >
        <h4 className="text-[16px] leading-7 lg:text-[20px] lg:leading-8 text-HeadingColor">
          {item.question}
        </h4>
      </div>

      {open && (
        <div className="mt-4">
          <p className="text-[13px] text-GrayColor leading-6 lg:text-[15px] lg:leading-7 font-[400] text-TextColor">
            {item.content}
          </p>
        </div>
      )}
      
    </div>
  )
}

export default FaqCard
