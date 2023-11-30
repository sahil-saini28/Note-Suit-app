import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../Images/bg-image.png'
import LoadingGif from "./LoadingGif";
function SignupPage() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpasword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
   
  const onname = (e) => {
    setname(e.target.value);
  };

  const onuser = (e) => {
    setemail(e.target.value);
  };

  const onpassword = (e) => {
    setpasword(e.target.value);
  };

  const usersingup = async (name,email, password) => {
    setIsLoading(true)
    const response = await fetch("https://note-suit.onrender.com/api/auth/createuser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({name, email, password }),
    });
    const json = await response.json();
    if (json.success) {
  
      navigate("/home");
      setIsLoading(false)
    } else {
      setIsLoading(false);
    }
    
  };

  const submitsingup = (e) => {
    e.preventDefault();
    usersingup(name,email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen " style={{
      background: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh', 
      
    }}>
      {isLoading===false?
      <div  className="bg-gray-900 p-8 rounded-md shadow-md w-80">
        <h2 className="text-3xl text-white font-bold mb-4"> Sign Up</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="text-white block mb-2">
              Username
            </label>
            <input
              onChange={onname}
              type="text"
              id="username"
              name="username"
              className="bg-gray-800 w-full rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white block mb-2">
              Email
            </label>
            <input
            onChange={onuser}
              type="email"
              id="email"
              name="email"
              className="bg-gray-800 w-full rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-white block mb-2">
              Password
            </label>
            <input
            onChange={onpassword}
              type="password"
              id="password"
              name="password"
              className="bg-gray-800 w-full rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
           onClick={submitsingup}
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300 w-full"
          >
            Sign Up
          </button>
        </form>
        <p className="text-white text-center mt-4">
          Already have an account?{" "}
          <a href="/" className="text-purple-600 hover:underline">
            Login
          </a>
        </p>
      </div>:<div>
        <LoadingGif></LoadingGif>
      </div>
}



    </div>
  );
}

export default SignupPage;
