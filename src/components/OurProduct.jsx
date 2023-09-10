import React from "react";


const images = [
  { src: 'https://i.ibb.co/Cvnjb8T/Photo-Room-20230818-160557.png', text: 'Text for Image 1' },
  { src: 'https://i.ibb.co/Cvnjb8T/Photo-Room-20230818-160557.png', text: 'Text for Image 2' },
  { src: 'https://i.ibb.co/Cvnjb8T/Photo-Room-20230818-160557.png', text: 'Text for Image 3' },
  { src: 'https://i.ibb.co/Cvnjb8T/Photo-Room-20230818-160557.png', text: 'Text for Image 3' },
  { src: 'https://i.ibb.co/Cvnjb8T/Photo-Room-20230818-160557.png', text: 'Text for Image 1' },
  { src: 'https://i.ibb.co/Cvnjb8T/Photo-Room-20230818-160557.png', text: 'Text for Image 2' },
  { src: 'https://i.ibb.co/Cvnjb8T/Photo-Room-20230818-160557.png', text: 'Text for Image 3' },
  { src: 'https://i.ibb.co/Cvnjb8T/Photo-Room-20230818-160557.png', text: 'Text for Image 3' },
];

const OurProduct = () => {
  return (
    <div className="image-container">
  {images.map((image, index) => (
    <div className="image-zoom" key={index}>
      <img src={image.src} alt={`Image ${index + 1}`} />
      <div className="image-text">{image.text}</div>
    </div>
  ))}
</div>
  );
};

export default OurProduct;
