import Image from 'next/image';
import Skills from '@/components/Skills';
import { useCursor } from "@/components/CursorProvider";
import { borderColors } from '@/components/helpers';

export default function Masterpieces() {
  const { cursor } = useCursor();

  return (
    <div className={`flex flex-col text-gray-400`}>
      <a href="https://www.datadrip.cafe" target="_blank" rel="noopener" className='md:mt-10'>
        <div className={`flex flex-col rounded-xl xl:px-8 py-6 border-2 border-transparent ${borderColors[cursor]} hover:border-opacity-50 transition duration-300`}>
          <h1 className={`text-gray-300 mb-4`}>Data Drip</h1>
          <div className={`flex flex-row mb-6`}>
            <div className={`relative w-2/5 mr-8 my-2`}>
              <Image 
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
          <h1 className={`text-gray-300 mb-4`}>Segway PID</h1>
          <div className={`flex flex-row mb-6`}>
            <div className={`relative w-2/5 mr-8 my-2`}>
              <Image 
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
          <h1 className={`text-gray-300 mb-4`}>Tactics Ninja</h1>
          <div className={`flex flex-row mb-6`}>
            <div className={`relative w-2/5 mr-8 my-2`}>
              <Image
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

    </div>
  );
};