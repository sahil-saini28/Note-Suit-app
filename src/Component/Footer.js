import React from 'react';

function Footer() {

  const redirectToGitHub = () => {
    window.location.href = 'https://github.com'; // Replace with your GitHub profile link
  };

  const redirectTolinkedin = () => {
    window.location.href = 'https://linkedin.com'; // Replace with your Instagram profile link
  };
 
  return (

   <>

    <footer className="bg-custom-l-yellow text-black py-6 relative">
    

      {/* Ninja Hathori SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 h-20 w-20 text-gray-500 fill-current"
        viewBox="0 0 20 20"
      >
        {/* Replace the path data with the SVG path for the Hathori */}
        <path d="M10 0c-2.3 0-4.5.9-6.2 2.6s-2.6 3.9-2.6 6.2c0 3.5 2.3 6.4 5.4 7.4v5.8h-2v2h10v-2h-2v-5.8c3.1-1 5.4-3.9 5.4-7.4 0-2.3-.9-4.5-2.6-6.2C14.5.9 12.3 0 10 0zm0 1.9c1.6 0 3.1.6 4.2 1.8 1.1 1.1 1.8 2.6 1.8 4.2 0 2.6-1.7 4.8-4 5.6v5.4h-3.6v-5.4c-2.3-.8-4-3-4-5.6 0-1.6.6-3.1 1.8-4.2C6.9 2.5 8.4 1.9 10 1.9zm0 2.1c-.7 0-1.3.3-1.8.8-.5.5-.8 1.1-.8 1.8s.3 1.3.8 1.8c.5.5 1.1.8 1.8.8s1.3-.3 1.8-.8c.5-.5.8-1.1.8-1.8s-.3-1.3-.8-1.8c-.5-.5-1.1-.8-1.8-.8z"/>
      </svg>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 relative z-10">
        <p>© 2023 Ninja Co. All rights reserved.</p>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            
            <p>Designed  and Created by  SAHIL SAINI</p>
          </div>
          <div onClick={redirectTolinkedin} className="hidden lg:block">
            <div >
            <svg
  width="40"
  height="40"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="#0077B5"
>
  <path d="M5 3c-1.646 0-3 1.354-3 3v12c0 1.646 1.354 3 3 3h14c1.646 0 3-1.354 3-3V6c0-1.646-1.354-3-3-3zM8 18H5V8h3v10zM7.5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM18 18h-2v-4c0-1.103-.897-2-2-2s-2 .897-2 2v4h-2V8h2v1.5a3.5 3.5 0 017 0V18z"/>
</svg>
</div>
<div onClick={redirectToGitHub}  >
<svg
  width="40"
  height="40"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="#181717"
>
  <path d="M12 .297C5.374.297 0 5.671 0 12.297c0 5.464 3.551 10.106 8.48 11.728.62.114.845-.269.845-.597 0-.295-.011-1.078-.017-2.116-3.446.749-4.174-1.613-4.174-1.613-.564-1.433-1.378-1.815-1.378-1.815-1.13-.77.086-.754.086-.754 1.25.088 1.912 1.282 1.912 1.282 1.113 1.907 2.918 1.357 3.63 1.038.113-.803.434-1.353.791-1.662-2.773-.314-5.684-1.387-5.684-6.172 0-1.362.485-2.474 1.282-3.35-.128-.313-.556-1.582.121-3.296 0 0 1.047-.334 3.43 1.279 1-.278 2.07-.417 3.132-.421 1.062.004 2.131.143 3.133.421 2.381-1.613 3.427-1.279 3.427-1.279.678 1.714.249 2.983.121 3.296.797.876 1.28 1.988 1.28 3.35 0 4.796-2.915 5.854-5.695 6.161.448.386.845 1.147.845 2.315 0 1.671-.016 3.018-.016 3.43 0 .332.224.717.851.595 4.926-1.617 8.474-6.263 8.474-11.728C24 5.671 18.627.297 12 .297z"/>
</svg>


</div>

            
          </div>
        </div>
      </div>

      
    </footer>
    </>

  );
}

export default Footer;
