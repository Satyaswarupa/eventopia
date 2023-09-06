import React from "react";


const images = [
  { src: 'https://imgs.search.brave.com/zzHF922gVw0RQLzfjhqaKZbT05RgL-hYR76NthAQxQA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTA3/ODY0MDg4L3Bob3Rv/L2h1bW1pbmdiaXJk/LXJ1Zm91cy10YWls/ZWQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU9GOWItcGpY/TU1jTTMyR1lnTkVH/YnVyeXd6cVAwaEx2/UG1nQlc3V3Z5ems9', text: 'Text for Image 1' },
  { src: 'https://imgs.search.brave.com/VXVG8bKwCEeScAm5fOVOPDFNKki8r_10ekUI2kGlqoE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTgw/MDMxOTEwL3Bob3Rv/L2ZvdXItZXVyb3Bl/YW4tYmVlLWVhdGVy/LWJpcmRzLXBlcmNo/aW5nLW9uLWJyYW5j/aC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RWdFMjgwU09S/eFI2dmo4eTJ5ZEN6/WWI5b1N3cTI3TnNs/dmpiVElUSjVUTT0', text: 'Text for Image 2' },
  { src: 'https://imgs.search.brave.com/eMtUE5-T8IeEWWx8IyMInQisUpPKLqOfES5aTCV7unk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/Mzc1ODkxL3Bob3Rv/L3NjYXJsZXQtbWFj/YXdzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ycnZNeFJ5/TG03N2pjbm1uckd0/ZE9wdzBQVHhvOG1r/Tk9VQV9oTzNSTzFn/PQ', text: 'Text for Image 3' },
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
