import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {


  const logout =()=>{
    localStorage.removeItem('token')
  }
  return (
    <>
<nav className=" bg-custom-d-yellow text-black-400 py-4 px-6  w-full top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
    <div className="flex items-center space-x-6">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 00-6.582 16.883l.006.007L12 22l6.576-3.11.006-.007A10 10 0 0012 2zm0 4a1 1 0 100 2 1 1 0 000-2zm0 6a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
      <ul className="flex space-x-6">
        <li><Link to="/home" className="text-black hover:text-gray-300 transition duration-300">Home</Link></li>
        <li><Link to="/aboutpage" className="text-black hover:text-gray-300 transition duration-300">About</Link></li>
        <li><Link to="/contact" className="text-black hover:text-gray-300 transition duration-300">Contact</Link></li>
  
      </ul>
    </div>
    { !localStorage.getItem('token')? <div className="flex items-center space-x-4">
      <a href="/" className="text-black hover:text-gray-300 transition duration-300">Login</a>
      <a href="/SignupPage" className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-300 transition duration-300">Sign Up</a>
    </div>:<a href="/" onClick={logout} className="bg-white text-gray-900 px-5 py-2 rounded-full hover:bg-gray-300 transition duration-300">logout</a>}
  </div>
</nav>

</>

  )
}

export default Navbar
