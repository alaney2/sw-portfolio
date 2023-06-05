import { borderColorsDefault } from '@/components/helpers';
import { useCursor } from "@/components/CursorProvider";


export default function Skills({ skills }) {
  const { cursor } = useCursor();

  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div key={index} className={`${borderColorsDefault[cursor]} border-opacity-50 px-3 py-1.5 text-gray-200 border-2 rounded-xl text-xs`}>
          {skill}
        </div>
      ))}
    </div>
  );
}
