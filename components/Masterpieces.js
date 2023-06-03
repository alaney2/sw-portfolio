import Image from 'next/image';


export default function Masterpieces({ mb }) {
  return (
    <div className={`mb-${mb} flex flex-col`}>
      <div className={`flex flex-row`}>
        <div className={`relative w-24`}>
          <Image 
            src="/datadrip.png"
            width={100}
            // fill
            height={100}
            alt="Data Drip"
          />
        </div>
        <div className={`flex flex-col`}>
          <h1>Data Drip</h1>
          <p>A machine learning and AI website </p>
        </div>
      </div>
    </div>
  );
};