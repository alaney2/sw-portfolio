import { jediOrSith } from "@/components/helpers";
import { useCursor } from "@/components/CursorProvider";


export default function TheForceWithin({ mb }) {
  const { cursor } = useCursor();
  const side = jediOrSith(cursor);

  return (
    <div className={`mb-${mb} text-md leading-relaxed text-gray-400`}>
      <p className={`mb-5`}>
      Simply dummy text of the printing and typesetting industry, Lorem Ipsum is. Since the 1500s, the industry&apos;s standard dummy text it has been, when a galley of type, an unknown printer took and scrambled it to make a type specimen book, he did. Survived it has, not only five centuries, but also into electronic typesetting, the leap it made, remaining essentially unchanged. Popularized it was in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker, including versions of Lorem Ipsum.
      </p>
      <p>
      A long established fact it is, that distracted by the readable content of a page, a reader will be when looking at its layout. The point of using Lorem Ipsum, that it has a more-or-less normal distribution of letters, it is, as opposed to &apos;Content here, content here&apos; using, making it look like readable English. Many desktop publishing packages and web page editors now, Lorem Ipsum as their default model text they use, and a search for &apos;lorem ipsum&apos; many web sites still in their infancy it will uncover. Over the years, various versions have evolved, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
  );
};