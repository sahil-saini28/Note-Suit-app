import React from "react";
import backgroundImage from '../Images/bg-image.png'
import { useState   } from "react";
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingGif from "./LoadingGif";
function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpasword ] = useState("")
  const notify = () => toast("Wow so easy!");
  
  
  const onuser = (e) => {
  setemail(e.target.value)
  };
   



  const onpassword = (e)=>{
    setpasword(e.target.value)
  }

  const userLogin = async (email, password) => {
    setIsLoading(true)
    const response = await fetch("https://note-suit.onrender.com/api/auth/login ", {
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
      
      setIsLoading(false)
    }
    else {
      
      setIsLoading(false)
    }
    
  };

  const submitclick = (e) => {
    e.preventDefault()
    notify()
    userLogin(email,password)

  };

  return (
    <div>  

    <div className="flex justify-center items-center h-screen bg-gray-900" style={{
      background: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '', 
      
    }}>
      
     { isLoading===false? <div className="bg-gray-900 p-8 rounded-md shadow-md w-80">
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
          // disabled=`${value.}`
            onClick={submitclick}
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300 w-full"
          ><ToastContainer />
            Login
          </button>
        </form>
        
      
      </div>: <div>
        <LoadingGif></LoadingGif>
      </div>
      
  }







    </div>
    </div>

  );
}

export default LoginPage;
