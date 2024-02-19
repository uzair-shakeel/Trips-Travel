import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Modal from "react-modal";
import Img01 from "../../assets/images/hero-img01.jpg";
import Img02 from "../../assets/images/hero-img02.jpg";
import Img03 from "../../assets/images/front-02.jpg";
import Img04 from "../../assets/images/gallery-04.jpg";
import Img06 from "../../assets/images/gallery-03.jpg";
import Img07 from "../../assets/images/gallery-08.jpg";
import Img08 from "../../assets/images/gallery-02.jpg";
import Img09 from "../../assets/images/gallery-01.jpg";

const ImagesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const Images = [Img01, Img02, Img03, Img06, Img04, Img07, Img08, Img09];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (isSmallScreen) {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1.5rem">
          {Images.map((item, index) => (
            <img
              key={index}
              src={item}
              className="w-full m-auto cursor-pointer transition-transform transform-gpu hover:scale-110 block rounded-xl"
              alt=""
              onClick={() => openModal(index)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
  }

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1.5rem">
          {Images.map((item, index) => (
            <img
              key={index}
              src={item}
              className="w-full m-auto cursor-pointer transition-transform transform-gpu hover:scale-110 block rounded-xl"
              alt=""
              onClick={() => openModal(index)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <div className="">
        <Modal
          className="w-screen h-auto md:w-auto md:h-screen m-auto overflow-hidden relative"
          isOpen={selectedImage !== null}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          shouldCloseOnOverlayClick={true} // Close on overlay click
          shouldCloseOnEsc={true} // Close on pressing Esc key
        >
          <button
            onClick={closeModal}
            className="absolute right-0 top-0 p-6 w-full h-full cursor-pointer"
          ></button>
          {selectedImage !== null && (
            <img
              src={Images[selectedImage]}
              alt="Full Preview"
              className="w-screen h-auto md:w-auto md:h-screen m-auto z-[1001px]"
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ImagesGallery;
