import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checksize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log('use effect');
    window.addEventListener('resize', checksize);
    return () => {
      console.log('cleaner');
      window.removeEventListener('resize', checksize)
    }
  });
  console.log('render');
  return (<>
    <h1>Screen Size : {size} Px</h1>
  </>);
};

export default UseEffectCleanup;
