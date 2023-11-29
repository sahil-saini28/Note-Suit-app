import React from 'react'

const Alert = () => {
  return (
    <>
      <div className="bg-yellow-200 p-4" role="alert">
  <div className="flex">
    <div className="py-1">
      <svg className="fill-current h-6 w-6 text-black-600 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM10 2a8 8 0 0 0-8 8c0 4.4 3.6 8 8 8s8-3.6 8-8a8 8 0 0 0-8-8zM9 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1-8H8V5h2v2z"/>
      </svg>
    </div>
    <div>
      <p className="text-yellow-800 font-bold">Alert!</p>
      <p className="text-sm text-yellow-700">This is a warning message. Please take note.</p>
    </div>
  </div>
</div>

    </>
  )
}

export default Alert
