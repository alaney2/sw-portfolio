import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";


export default function Nav({ mb }) {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);
    
  return (
    <div className={`flex flex-col mb-${mb}`}>
      <a href="" className='mb-1'>
        The Force Within
      </a>
      <a href="" className='mb-1'>
        Intergalactic Adventures
      </a>
      <a href="" className='mb-1'>
        {side === 'Jedi' ? 'Jedi Masterpieces' : 'Sith Masterpieces'}
      </a>
      <a href="" className='mb-1'>
        {side === 'Jedi' ? 'Contact the Resistance' : 'Contact the First Order'}
      </a>
    </div>
  );
};