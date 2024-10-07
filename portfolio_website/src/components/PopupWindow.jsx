import React from 'react';
import VidPlayer from './VidPlayer';
import SeparatorBody from './SeparatorBody';

const PopupWindow = ({isOpen,onClose, title, content,developer, jobTitle, videoId, width = 'max-w-md' }) =>{
    if (!isOpen) return null; //If not open, dont render anything

    return(
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
        onClick={onClose}>

            <div className={`bg-white p-10 rounded-lg shadow-lg relative w-full ${width}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
>
                <button
                  className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
                  onClick={onClose}
                >
                  &times;
                </button>
                {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
                <div><h4 className="text-lg font-semibold mb-2">{developer}</h4></div>
                <div><h6 className="text-med itallic mb-2">{jobTitle}</h6></div>
                <SeparatorBody className='flex justify-center mx-auto h-0.5 w-3/4 my-4 bg-gradient-to-r from-black to-green' />
          <div>{content}</div>
          <div><VidPlayer videoId={videoId}/> </div>
        </div>
      </div>
    );
  };
  
  export default PopupWindow;

