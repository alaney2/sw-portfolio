import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";
import styles from '@/styles/CursorSelection.module.css';


export default function Nav() {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);
  
  return (
    <nav className={`flex flex-col mt-16`}>
      <a href="" className={`mb-4 text-xs tracking-wider uppercase font-semibold`}>
        The Force Within
      </a>
      <a href="" className={`mb-4 text-xs tracking-wider uppercase font-semibold`}>
        Galactic Adventures
      </a>
      <a href="" className={`mb-4 text-xs tracking-wider uppercase font-semibold`}>
        {side === 'Sith' ? 'Sith Masterpieces' : 'Jedi Masterpieces'}
      </a>
      <a href="" className={`mb-4 text-xs tracking-wider uppercase font-semibold`}>
        {side === 'Sith' ? 'Contact the First Order' : 'Contact the Resistance'}
      </a>
    </nav>
  );
};