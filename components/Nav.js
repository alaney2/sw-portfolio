import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";


export default function Nav({ mb }) {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);
    
  return (
    <div className={`flex flex-col mt-16`}>
      <a href="" className='mb-2 text-sm'>
        The Force Within
      </a>
      <a href="" className='mb-2 text-sm'>
        Intergalactic Adventures
      </a>
      <a href="" className='mb-2 text-sm'>
        {side === 'Jedi' ? 'Jedi Masterpieces' : 'Sith Masterpieces'}
      </a>
      <a href="" className='mb-2 text-sm'>
        {side === 'Jedi' ? 'Contact the Resistance' : 'Contact the First Order'}
      </a>
    </div>
  );
};