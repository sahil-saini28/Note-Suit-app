import React from 'react';

import backgroundImage from '../Images/bg-image.png'
function Contact() {
  // Functions to handle redirection to respective social media profiles
  const redirectToGitHub = () => {
    window.location.href = 'https://github.com'; // Replace with your GitHub profile link
  };

  const redirectToInstagram = () => {
    window.location.href = 'https://instagram.com'; // Replace with your Instagram profile link
  };
 

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
            Go to Instagram
          </button>
        </div>
      </div>

      {/* LinkedIn SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mt-4 mb-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        {/* LinkedIn logo SVG */}
        {/* ... */}
      </svg>
    </div>
  );
}

export default Contact;
