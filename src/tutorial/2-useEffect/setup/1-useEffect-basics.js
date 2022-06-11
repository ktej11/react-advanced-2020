import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("uese effect is used");
  });
  console.log("render");
  document.title = `new title${value}`;
  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => {
      setValue(value + 1)
    }}> increase Val</button>
  </>;
};

export default UseEffectBasics;
