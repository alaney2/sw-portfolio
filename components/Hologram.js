import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hologram() {
  const { inView, ref } = useInView({ threshold: 1.0 });
  const [init, setInit] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInit(true)
    }, 100)
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, []);

  return (
    <div ref={ref}>
      {visible && (
      <>
        <Image
          draggable={false}
          style={{ zIndex: -1 }}
          src="/holo.png"
          alt="Hologram"
          width={200}
          height={200}
          // className={`profile-pic ${inView ? (!init ? 'animate' : 'show') : init ? 'hide' : 'hidden'}`}
          className={`profile-pic ${inView ? (!init ? (visible ? 'animate' : '') : 'show') : init ? 'hide' : 'hidden'}`}

        />

        <Image
          draggable={false}
          style={{ zIndex: -1 }}
          src="/holo.png"
          alt="Hologram"
          width={200}
          height={200}
          // className={`loading-profile-pic ${inView && !init ? 'show' : 'hidden'}`}
          className={`loading-profile-pic ${inView && !init && visible ? 'show' : 'hidden'}`}

        />
      </>
            )}
    </div>
  );
};