

import React from 'react';

export default function Skills({ skills }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <div key={index} className="px-3 py-1.5 text-gray-400 border-2 rounded-xl text-xs">
          {skill}
        </div>
      ))}
    </div>
  );
}
