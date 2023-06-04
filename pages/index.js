import Head from 'next/head'
import CursorSelection from '@/components/CursorSelection';
import Content from '@/components/Content';
import { useCursor } from '@/components/CursorProvider';


export default function Home() {
  const { cursor, isCursorSelected } = useCursor();
  return (
    <div
      className={`text-gray-300`}
      style={{ cursor: `url(${cursor}), auto` }}
    >
      <Head>
        <title>Alan Yao</title>
        <meta name="description" content="star wars portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {!isCursorSelected && <CursorSelection />}
      {isCursorSelected && <Content />}
      
    </div>
  );
};
