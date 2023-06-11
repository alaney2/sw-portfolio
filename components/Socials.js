import { useState } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaKaggle } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';
import { useWindowSize } from '@/components/helpers';
import Modal from '@/components/Modal';


export default function Socials({ isModalOpen, setIsModalOpen }) {
  const [showModal, setShowModal] = useState(false);

  const windowSize = useWindowSize();
  const iframeWidth = Math.min(windowSize.width * 0.8, 1012);
  const iframeHeight = Math.min(windowSize.height * 0.8, iframeWidth * 717 / 506, 1434);

  const toggleModal = () => {
    setShowModal(!showModal);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`flex`}>
      <a href="https://github.com/alaney2" title="GitHub" target="_blank" rel="noopener noreferrer" className="text-2xl mr-2 my-2 icon">
        <FaGithubAlt />
      </a>
      <a href="https://www.linkedin.com/in/alan-e-yao/" title="LinkedIn" target="_blank" rel="" className="text-2xl m-2 icon">
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