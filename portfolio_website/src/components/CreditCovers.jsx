import React from 'react'

const CreditCovers = ({ fileName, alt, onClick, videoId }) => {
  return (
    <img
      src={(`./src/images/${fileName}`)}
      alt={alt}
      onClick={onClick}
      className="w-60 h-60 m-4 rounded-xl border-2 border-gray shadow-md bg-green transform transition duration-500 hover:scale-110 hover:z-10 hover:opacity- hover:border-green hover:border-6"
      videoId={videoId}
    />
  );
};

export default CreditCovers;

