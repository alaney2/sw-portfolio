import React, { useState } from 'react';
import styled from 'styled-components';

const CursorContainer = styled.div`
  cursor: ${({ cursorFile }) => `url(${cursorFile}), auto`};
  height: 100vh;
  width: 100vw;
`;

const CursorSelection = () => {
  const [cursor, setCursor] = useState('');
  function handleCursorSelection(cursorFile) {
    setCursor(cursorFile);
  }

  return (
    <CursorContainer cursorFile={cursor}>
      <h1> Choose your lightsaber </h1>
      <button onClick={() => handleCursorSelection('/blue-saber.cur')}>Blue</button>
      <button onClick={() => handleCursorSelection('/red-saber.cur')}>Red</button>
      <button onClick={() => handleCursorSelection('/green-saber.cur')}>Green</button>
      <button onClick={() => handleCursorSelection('/purple-saber.cur')}>Purple</button>
    </CursorContainer>
  );
};

export default CursorSelection;