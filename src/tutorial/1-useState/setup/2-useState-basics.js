import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('default val');

  const handleClick = () => {
    if (text == 'random tis') {
      setText('rolls');
    } else {
      setText('random tis');
    }
  }
  return (
    <>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>

    </>
  );
};

export default UseStateBasics;
