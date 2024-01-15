import React from 'react'
import FaqCard from './FaqCard'
import { faqs} from './../../assets/data/faqs'

const FaqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item,index)=>(<FaqCard key={index} item={item} />))}
    </ul>
)
}

export default FaqList
