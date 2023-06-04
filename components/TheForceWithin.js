import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";


export default function TheForceWithin({ mb }) {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);

  return (
    <div className={`mb-${mb} text-md leading-relaxed text-gray-400`}>
      <p className={`mb-5`}>
        Greetings, I am a software engineer based in the Outer Rim Territories of the galaxy.
        Throughout my academic odyssey, I have had the opportunity to complete three internships at leading tech companies, where I honed my skills in various domains such as droid programming, hyperdrive optimization, and cloud city computing.
      </p>

      <p>
        When I&apos;m not immersed in coding or practicing my lightsaber techniques, I enjoy exploring my creative side through hobbies like HoloNet photography and cantina music production.
        As an aspiring {side === 'Sith' ? 'Sith Lord' : 'Jedi Knight'}, I am driven by the desire to create meaningful and impactful solutions that improve lives across the galaxy.
        Don&apos;t hesitate to reach out if you&apos;d like to connect or discuss potential collaborations in our quest to restore balance to the Force.
      </p>
    </div>
  );
};