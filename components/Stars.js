import React from "react";


const Stars = ({ count }) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    stars.push(
      <div
        key={i}
        style={{
          position: 'fixed',
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          backgroundColor: 'white',
          top: `${y}%`,
          left: `${x}%`,
          zIndex: 0,
        }}
      />
    );
  }

  return <div style={{ position: 'relative', width: '100%', height: '100%' }}>{stars}</div>;
};

export default React.memo(Stars);
