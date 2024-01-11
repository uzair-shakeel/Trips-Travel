// About.jsx

import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-md w-full max-w-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">About Us</h2>
          <p className="text-sm md:text-base text-gray-500">Learn more about our company and mission.</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <p className="text-md md:text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur felis eget lectus varius, id vehicula elit eleifend. Donec sed purus nec lorem aliquet ultrices.
          </p>
          <p className="text-md md:text-lg text-gray-600">
            Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Aenean eu tortor id elit lacinia tincidunt.
          </p>
          <p className="text-md md:text-lg text-gray-600">
            Phasellus sed sem id tortor mollis tempor. Quisque vestibulum, mi sit amet vehicula tincidunt, dolor justo blandit magna, sit amet eleifend odio eros ac eros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
