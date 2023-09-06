import { useReducer, useState } from 'react';
import Modal from '../components/Modal/Index';

const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    return {
      ...state,
      people: [...state.people, { id: 1, name: 'Okon' }],
      isModalOpen: true,
      modalContent: 'Waiting to be added',
    };
  } else {
    return new Error('no matching type');
  }
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'Hello World',
};
const UserReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [name, setName] = useState('');
  //   const [people, setPeople] = useState([]);
  //   const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      //   setShowModal(true);
      let newItem = { id: new Date().getTime().toString(), name };
      console.log(newItem);
      dispatch({ type: 'ADD_ITE' });
      //   setPeople(updatedPeople);
      setName('');
    } else {
      //   setShowModal(true);
    }
  };
  return (
    <div>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <div>
        <form action='' onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
      <div>
        <div>
          {' '}
          people{' '}
          {state.people &&
            state.people.map((person, index) => (
              <h4 key={index}>{person.name}</h4>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserReducerBasics;
