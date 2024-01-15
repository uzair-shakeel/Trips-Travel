// ServicesList.jsx
import React from 'react';
import ServicesCard from './ServicesCard';
import { MdHotel } from "react-icons/md";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoMdBus } from "react-icons/io";

const ServicesList = () => {
  const services = [
    {
      title: 'Adventure Tours',
      description: 'Explore thrilling destinations with our guided adventure tours.',
      icon: <IoMdBus />,
    },
    {
      title: 'Travel Planning',
      description: 'Let us handle the details! We plan, you enjoy your dream vacation.',
      icon: <FaPlaneDeparture />,
    },
    {
      title: 'High-Quality Accommodations',
      description: 'Experience comfort and luxury with our carefully selected accommodations.',
      icon: <MdHotel />,
    },
  ];
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServicesCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;
