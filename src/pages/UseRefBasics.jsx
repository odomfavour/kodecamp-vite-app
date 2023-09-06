import { useEffect, useState } from 'react';
import { useRef } from 'react';

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const ageContainer = useRef(null);
  const divContainer = useRef(null);
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedPeople = [...people, refContainer.current.value];
    console.log(refContainer.current.value);
    console.log(ageContainer.current.value);
    divContainer.current.style.color = 'red';
    console.log();
    setPeople(updatedPeople);
    refContainer.current.value = '';
  };

  useEffect(() => {
    refContainer.current.focus();
    console.log(refContainer);
  }, []);

  return (
    <div>
      <div>
        <form action='' onSubmit={handleSubmit}>
          <div>
            <input type='text' ref={refContainer} />
          </div>
          <div>
            <input type='text' ref={ageContainer} />
          </div>
          <button className='btn'>Submit</button>
        </form>
      </div>
      <div>
        <div ref={divContainer}>Banana Island</div>
        <div>
          {' '}
          people{' '}
          {people &&
            people.map((person, index) => <h4 key={index}>{person}</h4>)}
        </div>
      </div>
    </div>
  );
};

export default UseRefBasics;
