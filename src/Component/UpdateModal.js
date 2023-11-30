import React, { useState } from 'react';
import { useContext } from 'react';
import userContextNote from '../Context/userContextNote';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = (props) => {
  const notify = () => toast("Note Updated!");
  const { editNote } = useContext(userContextNote)
  const { note  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    notify();
    editNote(note._id,title,description)
    // Handle form submission logic here

    // You can perform further actions with the title and description values
    closeModal(); // Close the modal after submission
  };

  return (
    <div >
      <button
        onClick={openModal}
        className="bg-custom-blue hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>

      {isOpen && (
        <>
          <div
            onClick={closeModal}
             className="bg-purple-600 hover:bg-purple-600 text-black font-bold py-2 px-4 rounded"
          ></div>

          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-custom-d-yellow rounded-lg shadow-lg p-8 max-w-md w-full mx-auto transition-all duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-black">Title</h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800"
              >
              
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.35 14.35a1 1 0 0 1-1.41 0L10 11.41l-2.94 2.94a1 1 0 0 1-1.41-1.41L8.59 10 5.65 7.06a1 1 0 0 1 1.41-1.41L10 8.59l2.94-2.94a1 1 0 0 1 1.41 1.41L11.41 10l2.94 2.94a1 1 0 0 1 0 1.41z" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
            <ToastContainer />
              <div  className=" text-black mb-4">
                <label
                  htmlFor="title"
                  className="block text-black font-bold mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full border rounded-md px-3 py-2 text-black-700 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-black font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="w-full border rounded-md px-3 py-2 text-black focus:outline-none focus:border-blue-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-custom-blue hover:bg-custom-blue text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
              </div>
            </form>
            
          </div>
        </>
      )}
      
      
    </div>
  );
};

export default Modal;
