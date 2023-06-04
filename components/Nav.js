import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";
import { textColors } from '@/components/helpers';


export default function Nav() {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);
  
  return (
    <nav className={`flex flex-col mt-16`}>
      <a href="#about" className={`mb-4 text-xs tracking-wider uppercase font-semibold ${textColors[cursor]} hover:text-opacity-80 transition duration-200`}>
        The Force Within
      </a>
      <a href="#experience" className={`mb-4 text-xs tracking-wider uppercase font-semibold ${textColors[cursor]} hover:text-opacity-80 transition duration-200`}>
        Galactic Adventures
      </a>
      <a href="#projects" className={`mb-4 text-xs tracking-wider uppercase font-semibold ${textColors[cursor]} hover:text-opacity-80 transition duration-200`}>
        {side === 'Sith' ? 'Sith Masterpieces' : 'Jedi Masterpieces'}
      </a>
      <a href="#contact" className={`text-xs tracking-wider uppercase font-semibold ${textColors[cursor]} hover:text-opacity-80 transition duration-200`}>
        {side === 'Sith' ? 'Contact the First Order' : 'Contact the Resistance'}
      </a>
    </nav>
  );
};