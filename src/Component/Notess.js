import React from 'react'
import { useContext,useEffect } from 'react';
import userContextNote from '../Context/userContextNote';
import NoteItem from './NoteItem';

import { useNavigate } from "react-router-dom";
const Notess = () => {
  const navigate = useNavigate();
  const {getnotes,notes, setnotes, addNote, deleteNote, editNote } = useContext(userContextNote)
   
useEffect( ()=>{
  if(localStorage.getItem('token')){
    getnotes()
  }
  else{
    navigate("/SignupPage");
  };
  
  //eslint-disable-next-line
},[getnotes,notes, setnotes, addNote, deleteNote, editNote])


  return (
   <> 
         <div className='flex flex-wrap  text-white gap-3 bg-black'>
        
        
           
        
         {notes.length===0 && 'no notes to display '} {notes.map((note)=>{
          return <NoteItem key = {note._id} des={note.description}   note={note} > </NoteItem>

        })} 
        
      
        
        </div>
      
    </>
  )
}

export default Notess
