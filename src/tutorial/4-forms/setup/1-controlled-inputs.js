import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange


const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, email);
    // setPeople(setFirstName, setEmail);
    // console.log(people);
    if (firstName && email) {
      const person = { firstName: firstName, email: email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('empty values');
    }
  }
  return <>
    <article>
      <form className='form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input type="text" id='firstName' name='firstName' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input type="email" id='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <button type="submit">add person</button>
      </form>
      {
        people.map((person) => {
          const { id, firstName, email } = person;
          return <div>
            <h4>{firstName}</h4>
          </div>
        })
      }
    </article>

  </>;
};

export default ControlledInputs;
