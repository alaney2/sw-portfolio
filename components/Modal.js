import { useState } from 'react';


const Modal = ({ onClose, children }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <button onClick={onClose} className="float-right">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
