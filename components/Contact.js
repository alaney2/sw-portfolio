import { useCursor } from "@/components/CursorProvider";
import { borderColorsAlways, textColors, jediOrSith } from '@/components/helpers';


export default function Contact() {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);

  return (
    <div className={`text-lg md:text-2xl`}>
      <div className={`py-2 md:py-4 px-4 md:px-8 border-2 md:border-transparent rounded-xl ${borderColorsAlways[cursor]} hover:border-opacity-50 ${textColors[cursor]} transition duration-500`}>
        <a href="mailto:alan@cribbly.io">{side === 'Sith' ? 'Contact the First Order' : 'Contact the Resistance'}</a>
      </div>
    </div>
  );
};