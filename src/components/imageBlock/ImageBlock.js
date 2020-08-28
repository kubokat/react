import React from 'react';

const ImageBlock = ({ image }) => (
  <div className="w-full p-0 md:w-1/3 md:p-10">
    <img className="max-w-full" src={image} />
  </div>
);

export default ImageBlock;
