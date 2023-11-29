import React from "react";
import backgroundImage from '../Images/bg-image.png'
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
function LoginPage() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpasword ] = useState("")

  const onuser = (e) => {
  setemail(e.target.value)
  };

  const onpassword = (e)=>{
    setpasword(e.target.value)
  }

  const userLogin = async (email, password) => {
    //todo api
    const response = await fetch("http://localhost:5000/api/auth/login ", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (json.success){
      localStorage.setItem('token', json.authtoken)
      navigate('/home');
      //redirect
    }
    else {
      alert("akal ke andhe dhang se dall email or password")
    }
    console.log(json);
  };

  const submitclick = (e) => {
    e.preventDefault()
    userLogin(email,password)

  };

  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-900" style={{
      background: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '', 
      
    }}>
      
      <div className="bg-gray-900 p-8 rounded-md shadow-md w-80">
        <h2 className="text-3xl text-white font-bold mb-4"> Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="text-white block mb-2">
              Email
            </label>
            <input
              onChange={onuser}
              type="text"
              id="username"
              name="username"
              className="bg-gray-800 w-full rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-white block mb-2">
              Password
            </label>
            <input
              onChange={onpassword}
              type="text"
              id="password"
              name="password"
              className="bg-gray-800 w-full rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            onClick={submitclick}
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300 w-full"
          >
            Login
          </button>
        </form>
        <p className="text-white text-center mt-4">
          Don't have an account?{" "}
          <a href="/" className="text-purple-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
