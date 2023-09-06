import React from 'react'


const images = [
  { src: 'https://i.ibb.co/Cvnjb8T/Photo-Room-20230818-160557.png', text: 'Text for Image 1' },
  { src: 'https://i.ibb.co/jJbM3pg/Photo-Room-20230818-191127.png', text: 'Text for Image 2' },
  { src: 'https://i.ibb.co/48f3PjN/Photo-Room-20230818-220143.png', text: 'Text for Image 3' },
];

const CardStyle = () => {
  return (
    <div className="image-container">
      <h3 className="heading">Our Products</h3>
    {images.map((image, index) => (
      <div className="image-zoom" key={index}>
        <img src={image.src} alt={`Image ${index + 1}`} />
        <div className="image-text">{image.text}</div>
      </div>
    ))}
  </div>
  )
}

export default CardStyle
