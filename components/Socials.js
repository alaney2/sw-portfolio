import { FaGithubSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaKaggle } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';
import { useCursor } from "@/components/CursorProvider";
import { borderColors, cursorToColor, cursorToRGBA } from '@/components/helpers';


export default function Socials() {
  const { cursor } = useCursor();
  const cursorColor = cursorToRGBA(cursor);

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
      <a href="https://drive.google.com/file/d/1_e-b51U-3TW77PJf5iUKRL02oD_bxmu8/view?usp=sharing" title="Resume" target="_blank" rel="noopener noreferrer" className="text-2xl m-2 icon">
        <RiFilePaper2Line />
      </a>

      {/* <iframe src="https://drive.google.com/file/d/1_e-b51U-3TW77PJf5iUKRL02oD_bxmu8/preview" width="640" height="480" allow="autoplay"></iframe> */}

    </div>
  );
};