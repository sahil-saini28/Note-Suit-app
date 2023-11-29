import React from 'react';
import { useContext } from 'react';
import userContextNote from '../Context/userContextNote';
import Modal from './UpdateModal';

import backgroundImage from '../Images/bg-image.png'
const NoteItem = (props) => {
  const { deleteNote } = useContext(userContextNote);
  const { note } = props;

  const date = new Date(note.date)
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
  })
  return (
  <>
    
    
     <div className="bg-custom-grey rounded-lg shadow-md p-6 max-w-md mx-auto sm:mr"  style={{
      background: `url(${backgroundImage})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
      
    }}>
     <h2 className=" text-xl font-semibold mb-2 ">Title </h2>
     <h4 className=" text-xl font-semibold mb-2 truncate">{note.title}</h4>
     <h2 className=" text-xl font-semibold mb-2 ">Description</h2>
     <p className=" truncate">{note.description}</p>
     <h2 className=" text-xl font-semibold mb-2 ">Tag</h2>
     <p className=" truncate">{note.tag}</p>
     {formattedDate}
     <div className="flex justify-between items-center mt-4">
       <div>
         <Modal note={note}></Modal>
       </div>
       <div>
         <button
           onClick={() => {
             deleteNote(note._id);
           }}
           className="bg-yellow-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
         >
           Delete
         </button>
       </div>
     </div>
   </div>
   
      
      
    
    </>
  );
};

export default NoteItem;
