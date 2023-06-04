import { useCursor } from "@/components/CursorProvider";
import { borderColors, textColors } from '@/components/helpers';


export default function Contact() {
  const { cursor } = useCursor();

  return (
    <div className={`text-2xl`}>
      <div className={`py-4 px-8 border-2 md:border-transparent rounded-xl ${borderColors[cursor]} hover:border-opacity-50 ${textColors[cursor]} transition duration-500`}>
        <a href="mailto:alanyao.training@gmail.com">Transmit Hologram</a> 
      </div>
    </div>
  );
};