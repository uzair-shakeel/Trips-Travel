import React from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import Img01 from '../../assets/images/hero-Img01.jpg'
import Img02 from '../../assets/images/hero-Img02.jpg'
import Img03 from '../../assets/images/front-02.jpg'
import Img04 from '../../assets/images/gallery-04.jpg'
// import Img05 from '../../assets/images/gallery-05.jpg'
import Img06 from '../../assets/images/gallery-03.jpg'
import Img07 from '../../assets/images/gallery-08.jpg'
import Img08 from '../../assets/images/gallery-02.jpg'
import Img09 from '../../assets/images/gallery-01.jpg'
// import Img09 from '../../assets/images/gallery-01.jpg'


const ImagesGallery = () => {
    const Images = [
        Img01, Img02, Img03, Img06, Img04,  Img07, Img08, Img09
      ];
    
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonry gutter='1.5rem'>
            {
                Images.map((item, index) => (
                    <img src={item} key={index} className='w-full cursor-pointer transition-transform transform-gpu hover:scale-110 block rounded-xl' alt="" />
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  );
};


export default ImagesGallery;