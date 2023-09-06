export const reducer = (state, action) => {
  if (action.type === 'ADD_PERSON') {
    console.log(state, action);
    const updatedPeople = [...state.people, action.payload];

    return {
      ...state,
      people: updatedPeople,
      isModalOpen: true,
      modalContent: 'New person added',
    };
  }

  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please add a value',
    };
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
      modalContent: '',
    };
  }

  if (action.type === 'REMOVE_PERSON') {
    let updatedPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: updatedPeople,
      isModalOpen: true,
      modalContent: 'Person Removed',
    };
  }
  throw new Error('No matching action type');
};
