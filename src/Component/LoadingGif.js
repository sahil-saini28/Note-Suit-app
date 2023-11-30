import React from 'react'
import Gif from './loading.gif';  // Corrected import statement
function LoadingGif() {
  return (
    <div>
        <div className="text-center  " >
      <img src={Gif} alt="loading" />  {/* Corrected image source */}
    </div>
    </div>
  )
}

export default LoadingGif
