import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";


export default function TheForceWithin({ mb }) {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);

  return (
    <div className={`mb-${mb} text-md leading-relaxed text-gray-400`}>
      <p className={`mb-5`}>
        Merging technology and the Force, at the core of my interests it has always been.
        Throughout my academic journey, I have completed three internships at tech companies and honed my skills in droid programming, hyperdrive optimization, and cloud city computing.
      </p>
      <p>
        When not busy coding or practicing lightsaber techniques, I explore my creative side through HoloNet photography, cantina music production, and CS:GO.
        As an aspiring {side === 'Sith' ? 'Sith Lord' : 'Jedi Knight'}, I am driven by the desire to 
        {side === 'Sith' ? ' reshape the galaxy according to my vision, and to overcome any who stand in my way' : ' create meaningful and impactful solutions, improving lives across the galaxy'}.
        Hesitate not to reach out, if connect or discuss potential collaborations in our quest to 
        {side === 'Sith' ? ' harness the full potential of the dark side' : ' restore balance to the Force'}, you would like.
      </p>
    </div>
  );
};