
import './App.css';
import { BrowserRouter as Switch ,Route,Routes } from "react-router-dom";
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import LoginPage from './Component/LoginPage';
import Navbar from './Component/Navbar';
import SignupPage from './Component/SingupPage';
import NoteContextProvider from './Context/NoteContextProvider';
import Home from './Component/Home';

import AboutPage from './Component/AboutPage ';

// import React, { useEffect } from 'react';
// import Modal from 'react-modal';
// import FloatingButton from './Component/FloatingButton';
 // Import your FloatingButton component

function App() {
  // useEffect(() => {
  //   // Set the app element here by selecting an element that wraps your entire app
  //   Modal.setAppElement('#root'); // Replace '#root' with the appropriate selector
  // }, [])
  return (
  <>
  <NoteContextProvider>
     <Switch>
     <Navbar></Navbar>
  
      {/* <FloatingButton></FloatingButton> */}
      <Routes>
      <Route exact path='/home'  element={<Home></Home>}></Route>
      <Route exact path='/aboutpage' element={<AboutPage></AboutPage>}></Route>
        <Route exact path='/contact' element={<Contact></Contact>}></Route>
        <Route exact path='/'  element={<LoginPage></LoginPage>}></Route>
        <Route exact path='/SignupPage'  element={ <SignupPage></SignupPage>}></Route>
      </Routes>
    </Switch>  
    <Footer></Footer>
    </NoteContextProvider>
  </>
  
  );
}

export default App;
