import Nav from '@/components/Nav';
import Socials from '@/components/Socials';
import TheForceWithin from "@/components/TheForceWithin";
import IntergalacticAdventures from "@/components/IntergalacticAdventures";
import Masterpieces from "@/components/Masterpieces";
import Contact from "@/components/Contact";
import styles from '@/styles/CursorSelection.module.css';

export default function Content() {

  return (
    <div className={`h-screen w-screen bg-black bg-cover bg-center`}>
      <div className="grid grid-cols-1 md:grid-cols-2 py-20 px-20">
        <div className={`mx-auto flex-between flex flex-col h-full`}>
          <h1 className={`${styles.starJedi} text-4xl mb-4`}>Alan Yao</h1>
          <h2 className={`mb-4 text-md`}> Master of Computer Science at UIUC</h2>
          <desc className={`text-gray-400 text-sm font-light mb-16`}> Bridging imagination and functionality with efficient code. </desc>
          <Nav mb={8}/>
          <div className="flex-grow"></div>
          <Socials />
        </div>
        <div>
          asdasd
          <TheForceWithin />
          <IntergalacticAdventures />
          <Masterpieces />
          <Contact />
        </div>
      </div>
    </div>
  );
};
