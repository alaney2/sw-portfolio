import { useState } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaKaggle } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';
import { useCursor } from "@/components/CursorProvider";
import { cursorToRGBA, useWindowSize } from '@/components/helpers';


const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-slate-950 bg-opacity-50">
      <div className="bg-slate-800 p-6 rounded-xl flex flex-col">
        <button onClick={onClose} className="float-right">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default function Socials() {
  const { cursor } = useCursor();
  const cursorColor = cursorToRGBA(cursor);
  const [showModal, setShowModal] = useState(false);

  const windowSize = useWindowSize();

  const iframeWidth = windowSize.width * 0.8;
  const iframeHeight = windowSize.height * 0.8;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={`flex`}>
      <a href="https://github.com/alaney2" title="GitHub" target="_blank" rel="noopener noreferrer" className="text-2xl mr-2 my-2 icon">
        <FaGithubAlt />
      </a>
      <a href="https://www.linkedin.com/in/alan-e-yao/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-2xl m-2 icon">
        <FaLinkedinIn />
      </a>
      <a href="https://www.kaggle.com/alaney2" title="Kaggle" target="_blank" rel="noopener noreferrer" className="text-xl m-2 icon">
        <FaKaggle />
      </a>
      <a 
        href="/"
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}
        title="Resume" target="_blank" rel="noopener noreferrer" className="text-2xl m-2 icon">
        <RiFilePaper2Line />
      </a>

      {showModal && (
        <Modal onClose={toggleModal}>
          <iframe
            src="https://drive.google.com/file/d/1_e-b51U-3TW77PJf5iUKRL02oD_bxmu8/preview"
            width={iframeWidth}
            height={iframeHeight}
            allow="autoplay"
          ></iframe>
        </Modal>
      )}
    </div>
  );
};