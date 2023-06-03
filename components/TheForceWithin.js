import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";

export default function TheForceWithin({ mb }) {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);

  return (
    <div className={`mb-${mb} text-sm`}>
      <p className={`my-4`}>
      Greetings, fellow {side === 'Sith' ? 'Sith' : 'Jedi'}. I am a software engineer based in the Outer Rim Territories of the galaxy.
      With a strong foundation in programming languages and software development, I am dedicated to creating innovative solutions that make a difference in the galaxy. 
      Throughout my academic journey, I have had the opportunity to complete three internships at leading tech companies, where I honed my skills in various domains such as droid programming, hyperdrive optimization, and cloud city computing.
      </p>
      <p>

      When I&apos;m not busy coding or practicing my lightsaber skills, I love to explore my creative side through hobbies like HoloNet photography and cantina music production.

      As an aspiring {side === 'Sith' ? 'Sith Lord' : 'Jedi Knight'}, I am driven by the desire to create meaningful and impactful solutions that improve lives across the galaxy.
      Don&apos;t hesitate to reach out if you&apos;d like to connect or discuss potential collaborations in our quest to restore balance to the Force.
      </p>
    </div>
  );
};