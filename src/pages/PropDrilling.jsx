/* eslint-disable react/prop-types */
import { useState } from "react";

const PropDrilling = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "Spiderman" },
    { id: 2, name: "Superman" },
    { id: 3, name: "Wonderwoman" },
    { id: 4, name: "HawkEye" },
  ]);

  const removePerson = (personId) => {
    let updatedPeople = people.filter((person) => person.id !== personId);
    setPeople(updatedPeople);
  };
  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => (
        <SinglePerson key={person.id} {...person} removePerson={removePerson} />
      ))}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
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

export default PropDrilling;
