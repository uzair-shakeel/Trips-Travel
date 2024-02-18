import React, { useState } from "react";
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

// Override default styles for the modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%", // Adjust as needed
    maxHeight: "90%", // Adjust as needed
  },
};

const ImagesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const Images = [Img01, Img02, Img03, Img06, Img04, Img07, Img08, Img09];

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {" "}
      {/* Centering the content */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1.5rem">
          {Images.map((item, index) => (
            <img
              key={index}
              src={item}
              className="w-full cursor-pointer transition-transform transform-gpu hover:scale-110 block rounded-xl"
              alt=""
              onClick={() => openModal(index)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className="">
        <Modal
          style={customStyles} // Apply custom styles
          isOpen={selectedImage !== null}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          shouldCloseOnOverlayClick={true} // Close on overlay click
          shouldCloseOnEsc={true} // Close on pressing Esc key
        >
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 p-6 cursor-pointer"
          ></button>
          {selectedImage !== null && (
            <img
              src={Images[selectedImage]}
              alt="Full Preview"
              className="w-auto h-auto max-h-full max-w-full"
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ImagesGallery;
