import React from 'react';

import backgroundImage from '../Images/bg-image.png'
import LoadingGif from './LoadingGif';
function Contact() {
  
  const redirectToGitHub = () => {
    window.location.href = 'https://github.com/sahil-saini28'; 
  };

  const redirectToInstagram = () => {
    window.location.href = 'https://www.linkedin.com/in/sahilsaini28'; 
  }
 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white" style={{
      background: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    }}>
      <h1 className="text-4xl font-bold my-8">Contact Us</h1>
  
      <div className="max-w-3xl flex justify-between items-center">
        {/* GitHub Card */} 
        <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center justify-center text-center">
          {/* GitHub logo SVG */}

          <button onClick={redirectToGitHub} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded">
            Go to GitHub
          </button>
        </div>

      
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mb-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          {/* LinkedIn logo SVG */}
          {/* ... */}
        </svg>

        {/* Instagram Card */}
        <div className="bg-gray-800 rounded-lg p-8 flex flex-col items-center justify-center text-center">
          {/* Instagram logo SVG */}
          {/* ... */}
          <button onClick={redirectToInstagram} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded">
            Go to Linkedin
          </button>
        </div>
      </div>

      {/* LinkedIn SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mt-4 mb-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        {/* LinkedIn logo SVG */}
       
        {/* ... */}
      </svg>
      <LoadingGif></LoadingGif>
    </div>
  );
}

export default Contact;
