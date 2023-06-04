import Nav from '@/components/Nav';
import Socials from '@/components/Socials';
import TheForceWithin from "@/components/TheForceWithin";
import GalacticAdventures from "@/components/GalacticAdventures";
import Masterpieces from "@/components/Masterpieces";
import Contact from "@/components/Contact";
import styles from '@/styles/CursorSelection.module.css';

export default function Content() {

  return (
    <div className={`mx-auto min-h-screen min-w-screen max-w-screen bg-black bg-cover bg-center py-24 px-20`}>
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2">
        <div className={`mx-auto w-full md:w-[360px] justify-between flex flex-col fixed top-0 h-screen overflow-y-auto`}>
          <div>
            <h1 className={`${styles.starJedi} text-5xl mt-24 tracking-widest text-gray-100`}>Alan Yao</h1>
            <h2 className={`my-4 text-lg text-gray-200`}> Master of Computer Science at UIUC</h2>
            <desc className={`text-gray-400 text-md font-light`}> Bridging imagination and functionality with efficient code. </desc>
            <Nav/>
          </div>
          <Socials />
        </div>
        <div className={`hidden md:block md:col-start-1 md:col-end-2`}></div>
        <div className={`w-full md:w-auto`}>
          <TheForceWithin />
          <div className='mb-24'></div>
          <GalacticAdventures />
          <div className='mb-36'></div>
          <Masterpieces />
          <div className='mb-36'></div>
          <Contact />
          <div className='mb-24'></div>
        </div>
      </div>
    </div>
  );
};
