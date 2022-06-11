import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  function clearthatshit() {
    return (setPeople([]));
  }
  function removethis(id) {
    // console.log(data[id - 1]));
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople);
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{id} {name}  </h4>
            <button className='btn' onClick={() => removethis(id)}>remove</button>
          </div>
        );
      })}
      {/* <button className='btn' onClick={() => setPeople([])}>Delete</button> */}

      <button className='btn' onClick={clearthatshit}>Delete all</button>
    </>
  );
};

export default UseStateArray;
