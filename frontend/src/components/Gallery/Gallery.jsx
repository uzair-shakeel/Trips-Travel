import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MdCancel } from "react-icons/md";
import Modal from "react-modal";
import Img01 from "../../assets/images/hero-Img01.jpg";
import Img02 from "../../assets/images/hero-Img02.jpg";
import Img03 from "../../assets/images/front-02.jpg";
import Img04 from "../../assets/images/gallery-04.jpg";
import Img06 from "../../assets/images/gallery-03.jpg";
import Img07 from "../../assets/images/gallery-08.jpg";
import Img08 from "../../assets/images/gallery-02.jpg";
import Img09 from "../../assets/images/gallery-01.jpg";

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
          className="h-screen m-auto overflow-hidden relative"
          isOpen={selectedImage !== null}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
        >
          <button onClick={closeModal} className=" absolute right-0 top-0 p-6">
            <MdCancel className="h-8 w-8" />
          </button>
          {selectedImage !== null && (
            <img
              src={Images[selectedImage]}
              alt="Full Preview"
              className="h-screen m-auto "
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ImagesGallery;
