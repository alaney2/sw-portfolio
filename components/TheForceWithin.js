import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";


export default function TheForceWithin({ mb }) {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);

  return (
    <div className={`mb-${mb} text-md leading-relaxed text-gray-400`}>
      <p className={`mb-5`}>
        Merging technology and the Force, at the core of my interests it has always been.
        Throughout my academic journey, completed three internships at leading tech companies, I have. Skills in droid programming, hyperdrive optimization, and cloud city computing, honed they were.
      </p>
      <p>
        When not busy coding or practicing lightsaber techniques, explore my creative side through HoloNet photography and cantina music production, I do.
        As an aspiring {side === 'Sith' ? 'Sith Lord' : 'Jedi Knight'}, driven by the desire to create meaningful and impactful solutions, improving lives across the galaxy, I am.
        Hesitate not to reach out, if connect or discuss potential collaborations in our quest to restore balance to the Force, you would like.
      </p>
    </div>
  );
};