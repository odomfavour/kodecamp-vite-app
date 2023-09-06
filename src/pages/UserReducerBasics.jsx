import { useReducer, useState } from 'react';
import Modal from '../components/Modal/Index';
import { reducer } from '../reducer';
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'Something Hoooge',
};

const UserReducerBasics = () => {
  const [name, setName] = useState('');
  // const [people, setPeople] = useState('');
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [state, dispatch] = useReducer(reducer, defaultState);
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      let newPerson = { id: new Date().getTime().toString(), name };
      // setPeople([...people, newPerson]);
      setName('');
      dispatch({ type: 'ADD_PERSON', payload: newPerson });
      // setIsModalOpen(true);
    } else {
      dispatch({ type: 'NO_VALUE' });
      // setIsModalOpen(true);
    }
  };
  return (
    <div>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <div>
        <form action='' onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor='name'>Name</label>
            </div>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button className='btn' style={{ marginTop: '10px' }}>
            Submit
          </button>
        </form>
      </div>
      <div>
        <div style={{ marginTop: '30px' }}>
          <h4>People</h4>
          {state.people.length > 0 &&
            state.people.map((person) => (
              <div key={person.id}>
                <h5>{person.name}</h5>
                <button
                  onClick={() =>
                    dispatch({ type: 'REMOVE_PERSON', payload: person.id })
                  }
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserReducerBasics;
