import { useState } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaKaggle } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';
import { SiD, SiDevpost } from 'react-icons/si';
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
      <a href="https://www.devpost.com/alaney2" title="Devpost" target="_blank" rel="noopener noreferrer" className="text-xl m-2 icon">
        <SiDevpost />
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
            src={process.env.NEXT_PUBLIC_RESUME_URL || "https://drive.google.com/file/d/1PKhRlzHXVK0hFCopD7sYbI2TdFmQfn62/preview"}
            width={iframeWidth}
            height={iframeHeight}
            allow="autoplay"
          ></iframe>
        </Modal>
      )}
    </div>
  );
};