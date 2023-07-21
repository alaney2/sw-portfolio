import Image from 'next/image';
import Skills from '@/components/Skills';
import { useCursor } from "@/components/CursorProvider";
import { borderColors } from '@/components/helpers';
import { FaCode, FaPlay } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

export default function Masterpieces({ isModalOpen }) {
  const { cursor } = useCursor();

  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <div className={`flex flex-col text-gray-400`}>
      <a href="https://www.datadrip.cafe" target="_blank" rel="noopener" className='md:mt-10'>
        <div className={`flex flex-col rounded-xl xl:px-8 py-6 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className='flex mb-4 mr-6'>
            <h1 className={`text-gray-300`}>Data Drip</h1>
            <button 
              onClick={() => handleButtonClick("https://github.com/alaney2/datadrip")}
              title="Code"
              className="text-xl icon ml-6"
            >
              <FaCode />
            </button>
          </div>
          <div className={`flex flex-row mb-6`}>
            <div className={`relative w-2/5 mr-8 my-2`}>
              <Image
                style={{ visibility: isModalOpen ? 'hidden' : 'visible' }}
                src="/datadrip.png"
                alt="Data Drip"
                width={300}
                height={300}
              />
            </div>
            <div className={`flex flex-col text-md w-3/5`}>
              <p className="text-sm leading-relaxed">Explore a comprehensive knowledge hub on machine intelligence and artificial learning, featuring in-depth articles, reading lists, and a dynamic interface for discovering related content. </p>
            </div>
          </div>
          <Skills skills={['NextJS', 'MUI', 'Google Sheets', 'Redis', 'OpenAI']}/>
        </div>
      </a>

      <a href="https://segway-pid.vercel.app" target="_blank" rel="noopener" className='md:mt-10'>
        <div className={`flex flex-col rounded-xl xl:px-8 py-6 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className='flex mb-4 mr-6'>
            <h1 className={`text-gray-300`}>Segway PID</h1>
            <button
              onClick={() => handleButtonClick("https://github.com/alaney2/segway-pid")} 
              title="Code"
              className="text-xl icon ml-6"
            >
              <FaCode />
            </button>
          </div>
          <div className={`flex flex-row mb-6`}>
            <div className={`relative w-2/5 mr-8 my-2`}>
              <Image
                style={{ visibility: isModalOpen ? 'hidden' : 'visible' }}
                src="/segway-pid.png"
                alt="Segway PID"
                width={300}
                height={300}
              />
            </div>
            <div className={`flex flex-col text-md w-3/5`}>
              <p className="text-sm leading-relaxed">
                A simple Proportional-Integral-Derivative (PID) controller for a segway that works by continuously adjusting the segway&apos;s motor speed to maintain balance.
              </p>
            </div>
          </div>
          <Skills skills={['Rust', 'Macroquad', 'egui']}/>
        </div>
      </a>

      <a href="https://tactics-ninja.vercel.app" target="_blank" rel="noopener" className='md:mt-10'>
        <div className={`flex flex-col rounded-xl xl:px-8 py-6 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className='flex mb-4 mr-6'>
            <h1 className={`text-gray-300`}>Tactics Ninja</h1>
            <button 
              onClick={() => handleButtonClick("https://github.com/alaney2/tactics-ninja")} 
              title="Code"
              className="text-xl icon ml-6"
            >
              <FaCode />
            </button>
          </div>
          <div className={`flex flex-row mb-6`}>
            <div className={`relative w-2/5 mr-8 my-2`}>
              <Image
                style={{ visibility: isModalOpen ? 'hidden' : 'visible' }}
                src="/tacticsninja.png"
                alt="Tactics Ninja"
                width={300}
                height={300}
              />
            </div>
            <div className={`flex flex-col text-md w-3/5`}>
              <p className="text-sm leading-relaxed">
                A user-friendly chess engine for creating, analyzing, and improving chess positions, and also serves as a practice tool.
              </p>
            </div>
          </div>
          <Skills skills={['React', 'Tailwind', 'chessboardjsx', 'chess.js']}/>
        </div>
      </a>
      <a href="https://cal-hacks-frontend.vercel.app/" target="_blank" rel="noopener" className='md:mt-10'>
        <div className={`flex flex-col rounded-xl xl:px-8 py-6 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className='flex mb-4 mr-6'>
            <h1 className={`text-gray-300`}>Quirk - CalHacks 2023 AI Hackathon</h1>
            <button 
              onClick={() => handleButtonClick("https://devpost.com/software/quirk-mox936")} 
              title="Code"
              className="text-lg icon ml-6"
            >
              <SiDevpost />
            </button>
          </div>
          <div className={`flex flex-row mb-6`}>
            <div className={`relative w-2/5 mr-8 my-2`}>
              <Image
                style={{ visibility: isModalOpen ? 'hidden' : 'visible' }}
                src="/quirk.png"
                alt="Quirk"
                width={300}
                height={300}
              />
            </div>
            <div className={`flex flex-col text-md w-3/5`}>
              <p className="text-sm leading-relaxed">
                Google and Twitter shove your personality into a box and make you view the Internet through a tiny pinhole. 
                We don&apos;t. Subscribe to the weird corners of the Internet and don&apos;t be an NPC.
              </p>
            </div>
          </div>
          <Skills skills={['NextJS', 'Tailwind', 'OpenAI', 'Beautiful Soup']}/>
        </div>
      </a>
      <a href="https://youtu.be/6G-bLp-DYCk" target="_blank" rel="noopener" className='md:mt-10'>
        <div className={`flex flex-col rounded-xl xl:px-8 py-6 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className='flex mb-4 mr-6'>
            <h1 className={`text-gray-300`}>Scribe - ServiceNow 2023 UTG Intern Hackathon</h1>
            <button 
              onClick={() => handleButtonClick("https://youtu.be/6G-bLp-DYCk")} 
              title="Play"
              className="text-md icon ml-6"
            >
              <FaPlay />
            </button>
          </div>
          <div className={`flex flex-row mb-6`}>
            <div className={`relative w-2/5 mr-8 my-2`}>
              <Image
                style={{ visibility: isModalOpen ? 'hidden' : 'visible' }}
                src="/scribe.png"
                alt="Scribe"
                width={300}
                height={300}
              />
            </div>
            <div className={`flex flex-col text-md w-3/5`}>
              <p className="text-sm leading-relaxed">
                A code editor for background scripts on the ServiceNow platform with custom syntax highlighting and autocomplete for ServiceNow&apos;s proprietary scripting language.
              </p>
            </div>
          </div>
          <Skills skills={['1st Place', 'ServiceNow', 'Java', 'JavaScript']}/>
        </div>
      </a>
      <a href="https://youtu.be/Hj2y1c_NzaQ" target="_blank" rel="noopener" className='md:mt-10'>
        <div className={`flex flex-col rounded-xl xl:px-8 py-6 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <div className='flex mb-4 mr-6'>
            <h1 className={`text-gray-300`}>Fluid - ServiceNow 2022 UTG Intern Hackathon</h1>
            <button 
              onClick={() => handleButtonClick("https://youtu.be/Hj2y1c_NzaQ")} 
              title="Play"
              className="text-md icon ml-6"
            >
              <FaPlay />
            </button>
          </div>
          <div className={`flex flex-row mb-6`}>
            <div className={`relative w-2/5 mr-8 my-2`}>
              <Image
                style={{ visibility: isModalOpen ? 'hidden' : 'visible' }}
                src="/fluid.png"
                alt="Fluid"
                width={300}
                height={300}
              />
            </div>
            <div className={`flex flex-col text-md w-3/5`}>
              <p className="text-sm leading-relaxed">
                A mobile app that allows developers to view and manage defects, stories, and pull requests.
              </p>
            </div>
          </div>
          <Skills skills={['5th Place', 'ServiceNow', 'Mobile App Builder', 'JavaScript']}/>
        </div>
      </a>
    </div>
  );
};