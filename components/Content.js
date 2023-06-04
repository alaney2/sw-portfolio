import Nav from '@/components/Nav';
import Socials from '@/components/Socials';
import TheForceWithin from "@/components/TheForceWithin";
import GalacticAdventures from "@/components/GalacticAdventures";
import Masterpieces from "@/components/Masterpieces";
import Contact from "@/components/Contact";
import styles from '@/styles/CursorSelection.module.css';
import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";


export default function Content() {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);

  return (
    <div className={`mx-auto min-h-screen min-w-screen max-w-screen bg-slate-950 bg-cover bg-center py-12 md:py-16 lg:py-24 px-8 md:px-12 lg:px-20`}>
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2">
        <div className={`md:mx-auto w-full md:w-[360px] justify-between flex flex-col md:fixed top-0 md:h-screen overflow-y-auto`}>
          <div className="">
            <h1 className={`${styles.starJedi} text-4xl sm:text-5xl md:mt-24 tracking-widest text-gray-100`}>Alan Yao</h1>
            <h2 className={`my-4 text-lg text-gray-200`}> Master of Computer Science at UIUC</h2>
            <desc className={`text-gray-400 text-md font-light`}> Bridging imagination and functionality with efficient code. </desc>
            <div className="hidden md:flex">
              <Nav />
            </div>
          </div>
          <div className="mb-24 mt-8">
            <Socials />
          </div>
        </div>
        <div className={`hidden md:block md:col-start-1 md:col-end-2`}></div>
        <div className={`w-full md:w-auto`}>
          <div className='mb-24 xl:px-8 md:py-4 scroll-mt-24' id="about">
            <h1 className='text-sm tracking-wider uppercase font-semibold visible md:hidden mb-8'>The Force Within</h1>
            <TheForceWithin />
          </div>
          <div className='mb-36 scroll-mt-24' id="experience">
            <h1 className='text-sm tracking-wider uppercase font-semibold visible md:hidden mb-8'>Galactic Adventures</h1>
            <GalacticAdventures />
          </div>
          <div className='mb-36 scroll-mt-24' id="projects">
            <h1 className='text-sm tracking-wider uppercase font-semibold visible md:hidden mb-8'>{side === 'Sith' ? 'Sith Masterpieces' : 'Jedi Masterpieces'}</h1>
            <Masterpieces />
          </div>
          <div className='mb-36 md:mb-0 flex justify-center scroll-mt-24' id="contact">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className='text-sm tracking-wider uppercase font-semibold visible md:hidden mb-8'>{side === 'Sith' ? 'Contact the First Order' : 'Contact the Resistance'}</h1>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
