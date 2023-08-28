import { useEffect, useState } from 'react';
import './ControlledInput.css';

const ControlledInput = () => {
  let cleared = {
    name: '',
    email: '',
    address: '',
  };
  const [person, setPerson] = useState(cleared);
  const [people, setPeople] = useState([]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  // const [email, setEmail] = useState('');
  // const [address, setAddress] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('The values:', person);
    if (!person.name.trim() && !person.email.trim() && !person.address.trim()) {
      alert('Please put your info');
    } else if (!person.email.trim()) {
      alert('Please put an email');
    } else {
      // let updatedArray = [...people, person];
      setPeople([...people, person]);

      setPerson(cleared);
    }
  };

  // useEffect(() => {
  //   // if (!person.name && !person.email && !person.address) {
  //   //   setIsBtnDisabled(true);
  //   // } else {
  //   //   setIsBtnDisabled(true);
  //   // }
  // }, [person]);

  return (
    <div>
      <h3>Controlled Input</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <div>
            <input
              type='text'
              id='name'
              value={person.name}
              onChange={(e) => setPerson({ ...person, name: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <div>
            <input
              type='email'
              id='email'
              value={person.email}
              onChange={(e) => setPerson({ ...person, email: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <div>
            <input
              type='text'
              id='address'
              value={person.address}
              onChange={(e) =>
                setPerson({ ...person, address: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <button className='btn'>Submit</button>
        </div>
      </form>
      {people &&
        people.map((per, index) => {
          const { name, email, address } = per;

          return (
            <div key={index} style={{ marginTop: '30px' }}>
              <h4>{name}</h4>
              <h4>{email}</h4>
              <h4>{address}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default ControlledInput;
