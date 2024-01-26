import { useRef, useState, useEffect } from 'react';
import Nav from '@/components/Nav';
import Socials from '@/components/Socials';
import TheForceWithin from "@/components/TheForceWithin";
import GalacticAdventures from "@/components/GalacticAdventures";
import Masterpieces from "@/components/Masterpieces";
import Contact from "@/components/Contact";
import styles from '@/styles/Font.module.css';
import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";
import Stars from '@/components/Stars';
import Hologram from '@/components/Hologram';
import Link from 'next/link';
import ColorChart from '@/components/ColorChart';

export default function Content() {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const getTopOffset = (ref) => ref.current ? ref.current.offsetTop : 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      
      const aboutTop = getTopOffset(aboutRef);
      const experienceTop = getTopOffset(experienceRef);
      const projectsTop = getTopOffset(projectsRef);

      // Update active section based on scroll position
      if (currentScrollPosition >= aboutTop && currentScrollPosition < experienceTop) {
        setActiveSection('about');
      } else if (currentScrollPosition >= experienceTop && currentScrollPosition < projectsTop) {
        setActiveSection('experience');
      } else if (currentScrollPosition >= projectsTop) {
        setActiveSection('projects');
      }
    };

    // Debounce the scroll event for performance optimization
    let debounceTimer;
    const debounce = (func, delay) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(func, delay);
    };

    window.addEventListener('scroll', () => debounce(handleScroll, 10));

    return () => {
      window.removeEventListener('scroll', () => debounce(handleScroll, 10));
    };
  }, []);

  return (
    <div className={`z-10 mx-auto min-h-screen min-w-screen max-w-screen bg-slate-900 bg-cover py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20 overflow-x-hidden`}>
      <Stars count={100} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2">
          <div className={`md:mx-auto w-full md:w-[360px] justify-between flex flex-col md:fixed top-0 md:h-screen overflow-y-hidden`}>
            <div className="align-center items-center">
              <Link href="/">
                <h1 className={`${styles.starJedi} text-4xl sm:text-5xl md:mt-24 tracking-widest text-gray-100`}>Alan Yao</h1>
              </Link>
              <h2 className={`my-5 text-lg text-gray-200`}> {`CS Graduate Student at UIUC`}</h2>
              <p className={`text-gray-400 text-md font-light`}> Bridging fluidity, flexibility, and functionality with finessive code. </p>
              <div className="hidden md:flex">
                <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
              </div>
            </div>
            <div className="flex grow relative w-24 md:w-36 md:pt-16">
              <Hologram />
            </div>
            <div className="mb-24 md:mb-20 mt-2 tall:mt-8 py-8">
              <Socials isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            </div>
          </div>
          <div className={`hidden md:block md:col-start-1 md:col-end-2`}></div>
          <div className={`w-full md:w-auto`}>
            <div ref={aboutRef} className='mb-24 xl:px-8 md:py-4 scroll-mt-24' id="about">
              <h1 className='text-md tracking-wider uppercase font-semibold visible md:hidden mb-8'>The Force Within</h1>
              <TheForceWithin />
            </div>
            <div ref={experienceRef} className='mb-12 md:mb-12 scroll-mt-24' id="experience">
              <h1 className='text-md tracking-wider uppercase font-semibold visible md:hidden mb-8'>Galactic Adventures</h1>
              <GalacticAdventures />
            </div>
            <div className="flex mb-16 md:mb-12 xl:px-8 md:py-4">
              <p className="text-[9px] lg:text-[10px] text-gray-500 w-full">Inspired by <a href="https://www.brittanychiang.com" target="_blank" rel="noopener noreferrer" className="underline">this portfolio</a> </p>
            </div>
            <div ref={projectsRef}>
              <div  className='mb-20 md:mb-24 scroll-mt-16' id="projects">
                <h1 className='text-md tracking-wider uppercase font-semibold visible md:hidden mb-8'>{side === 'Sith' ? 'Sith Projects' : 'Jedi Projects'}</h1>
                <Masterpieces isModalOpen={isModalOpen} />
              </div>
              <div className="mb-20 flex flex-col text-center justify-center align-center items-center">
                <h1 className='text-sm tracking-wider uppercase font-semibold visible mb-12'>
                  Lightsaber Popularity
                </h1>
                <ColorChart />
              </div>
              <div className='mb-24 md:mb-0 flex justify-center scroll-mt-24' id="contact">
                <div className="flex flex-col justify-center items-center h-full">
                  <Contact />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
