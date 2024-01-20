// ServicesCard.jsx
import React from 'react';

const ServicesCard = ({ service }) => {
const {title, description, icon} = service;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="bg-BaseColor text-4xl text-white p-2  mb-4 inline-block rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 ">{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

export default ServicesCard;
