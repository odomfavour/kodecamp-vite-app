/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';

const personContext = React.createContext();
console.log(personContext);

const ContextApi = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Spiderman' },
    { id: 2, name: 'Superman' },
    { id: 3, name: 'Wonderwoman' },
    { id: 4, name: 'HawkEye' },
  ]);

  const removePerson = (personId) => {
    let updatedPeople = people.filter((person) => person.id !== personId);
    setPeople(updatedPeople);
  };
  return (
    <personContext.Provider value={{ removePerson, people }}>
      <section>
        <h3>Context Api</h3>
        <List />
      </section>
    </personContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(personContext);
  return (
    <>
      {people.map((person) => (
        <SinglePerson key={person.id} {...person} />
      ))}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(personContext);
  //   console.log(data);
  return (
    <>
      <div className='flex'>
        <h4>{name}</h4>
        <button className='btn' onClick={() => removePerson(id)}>
          Remove
        </button>
      </div>
    </>
  );
};

export default ContextApi;
