import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hologram() {
  const { inView, ref } = useInView({ threshold: 1 });
  const [init, setInit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInit(true)
    }, 2000)
  }, []);

  return (
    <div ref={ref}>
      <Image
        style={{ zIndex: -1 }}
        src="/hologram.png"
        alt="Hologram"
        width={200}
        height={200}
        className={`profile-pic ${inView ? (!init ? 'animate' : 'show') : init ? 'hide' : 'hidden'}`}
      />

      <Image
        style={{ zIndex: -1 }}
        src="/hologram.png"
        alt="Hologram"
        width={200}
        height={200}
        className={`loading-profile-pic ${inView && !init ? 'show' : 'hidden'}`}
      />
    </div>
  );
};