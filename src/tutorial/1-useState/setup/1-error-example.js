import React from 'react';

const ErrorExample = () => {
  let title = 'random tis'

  const handleClick = () => {
    title = 'left wet'
    console.log(title);
  }
  return (
    <>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
      <h1>{title}</h1>
      <p>testing git</p>
    </>
  )
};

export default ErrorExample;
