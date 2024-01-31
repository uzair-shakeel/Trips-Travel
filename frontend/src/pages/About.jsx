import React from "react";
import ImagesGallery from "../components/Gallery/Gallery";

const About = () => {
  return (
    <section>
      {/* {Gallery Section Start} */}
      <section className="py-8 text-center px-6 md:px-12">
        <h1 className="text-[40px]  font-bold  ">
          Our <span className="text-BaseColor">Gallery</span>
        </h1>
        <p className="text-lg leading-8 mb-8 text-gray-800">
          "Unveil travel wonders in our gallery, a snapshot of TripsTravel's
          adventures."
        </p>
        <ImagesGallery />
      </section>
      {/* {Gallery Section Ends} */}
    </section>
  );
};

export default About;
