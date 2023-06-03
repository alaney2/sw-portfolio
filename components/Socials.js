import { FaGithubSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

import { FaLinkedin } from 'react-icons/fa';
import { FaKaggle } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';

export default function Socials({ mb }) {
  return (
    <div className={`flex mb-${mb}`}>
      <a href="https://github.com/alaney2" title="GitHub" className="text-xl mr-1.5 my-1.5">
        <FaGithubAlt />
      </a>
      <a href="https://www.linkedin.com/in/alan-e-yao/" title="LinkedIn" className="text-xl m-1.5">
        <FaLinkedinIn />
      </a>
      <a href="https://www.kaggle.com/alaney2" title="Kaggle" className="text-lg m-1.5">
        <FaKaggle />
      </a>
      <a href="" title="Resume" className="text-xl m-1.5">
        <RiFilePaper2Line />
      </a>

      {/* <iframe src="https://drive.google.com/file/d/1_e-b51U-3TW77PJf5iUKRL02oD_bxmu8/preview" width="640" height="480" allow="autoplay"></iframe> */}

    </div>
  );
};