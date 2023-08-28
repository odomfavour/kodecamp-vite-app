// jsx rules
// return on element
// use a div, section, fragment
// use className instead class
// close every element
// const BookList = () => {};

import { useState, useEffect } from 'react';
import './App.css';
// const desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi magni blanditiis dicta quidem eos aut molestiae? Aliquid, tempora.
// Consequatur natus facilis doloribus voluptates eligendi aliquid, modi esse
// non nulla.`;
// const img = `https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL254_SR254,254_.jpg`;
import Book from './components/Book';
import { myBooks } from './utils/data';

// let numbs = ['1', '2', 3, 4];

// const Book = ({ img, desc, author, title }) => {
//   // const { img, desc, author, title } = book;

//   return (
//     <div className='book'>
//       <img src={img} />
//       <h4 className='title'>{title}</h4>
//       <p className='desc'>{desc}</p>
//       <p className=''>by {author}</p>
//     </div>
//   );
// };

// Book.propTypes = {
//   img: propTypes.string,
//   desc: propTypes.string,
//   author: propTypes.string,
//   title: propTypes.string,
// };

// useState
const Loading = () => {
  return (
    <div>
      <h4> loading...</h4>
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    // cleanup function

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: '30px' }}>
      <h3>Window resize</h3>
      <h2>{size}PX</h2>
    </div>
  );
};

const BookList = () => {
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);
  const [text, setText] = useState('everyone');
  const [books, setBooks] = useState(myBooks);
  const [person, setPerson] = useState({
    name: 'Ogochuks',
    age: 39,
    message: 'Can I be 39 years?',
  });
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  // const [size, setSize] = useState(window.innerWidth);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [animal, setAnimal] = useState('Fish');
  const [show, setShow] = useState(false);
  const [dark, setDark] = useState(false);

  // console.log(text);

  const changeName = () => {
    console.log('button was clicked');
    setText('Tolu');
    if (text === 'Tolu') {
      setText('Everyone');
    }
  };

  const removeBook = (bookId) => {
    let updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  // const clearBooks = () => {
  //   setBooks([]);
  // };

  const changeMessage = () => {
    setPerson({ ...person, message: 'Well, Austin said so' });
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  };

  useEffect(() => {
    // console.log('Call useEffect');
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }

    // return () => {
    //   second
    // }
  }, [value]);

  // const checkSize = () => {
  //   setSize(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', checkSize);
  //   // cleanup function

  //   return () => {
  //     window.removeEventListener('resize', checkSize);
  //   };
  // });

  useEffect(() => {
    console.log('Hello');
  }, [value]);

  const url = 'https://api.github.com/users';

  const getUsers = () => {
    setIsLoading(true);
    setTimeout(async () => {
      const response = await fetch(url);
      const users = await response.json();
      // console.log(users);
      setUsers(users);
      setIsLoading(false);
    }, 3000);
  };

  // console.log('users', users);

  // const intervalId = setInterval(getUsers, delay);

  useEffect(() => {
    getUsers();
  }, []);

  console.log('render component');
  // if (!isLoading) {
  //   return <h3>Loading...</h3>;
  // }

  return (
    <>
      <div>
        <h1>Hello {text}</h1>
        <button className='btn' onClick={changeName}>
          Change Name
        </button>
      </div>
      <div className='books-container'>
        {books.map((book) => (
          <Book
            key={book.id}
            {...book}
            removeBook={() => removeBook(book.id)}
          />
        ))}
      </div>
      <button className='btn' onClick={() => setBooks([])}>
        Clear Books
      </button>
      <div>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <p>{person.message}</p>
        <button className='btn' onClick={changeMessage}>
          Change Message
        </button>
      </div>
      <div>
        <h3>Regular counter</h3>
        <h2>{count}</h2>
        <div className='flexBtns'>
          <button className='btn' onClick={() => setCount(count + 1)}>
            Increment
          </button>
          <button className='btn' onClick={() => setCount(0)}>
            Reset
          </button>
          <button className='btn' onClick={() => setCount(count - 1)}>
            Decrement
          </button>
        </div>
      </div>
      <div>
        <h3>Complex counter</h3>
        <h2>{count}</h2>
        <div className='flexBtns'>
          <button className='btn' onClick={complexIncrease}>
            increase later
          </button>
        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h2>{value}</h2>
        <button className='btn' onClick={() => setValue(value + 1)}>
          Increase Msg Count
        </button>
      </div>
      {/* <div style={{ marginTop: '30px' }}>
        <h3>Window resize</h3>
        <h2>{size}PX</h2>
      </div> */}
      <div style={{ marginTop: '30px' }}>
        <h3>Github users</h3>
        <div>
          {isLoading ? (
            <h4>Loading...</h4>
          ) : (
            <div>
              {users.map((user) => {
                const { id, login, avatar_url, html_url } = user;

                return (
                  <li key={id}>
                    <img src={avatar_url} alt={login} />
                    <div>
                      <h5>{login}</h5>
                      <a href={html_url}>Profile</a>
                    </div>
                  </li>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h1>Short circuit</h1>
        <h4>{animal || 'Dog'}</h4>
        {/* {isLoading && (
          <div>
            <h4> loading...</h4>
          </div>
        )} */}
        {/* js ternary
        
        isLoading ? 'I am loading' : 'I am not loading'
        
        */}
        {isLoading ? (
          <Loading />
        ) : (
          <div>
            <h4> i am not loading...</h4>
          </div>
        )}
        <button className='btn' onClick={() => setIsLoading(!isLoading)}>
          Toggle Loading
        </button>
        <div style={{ marginTop: '30px' }}>
          {show && <Item />}
          <button className='btn' onClick={() => setShow(!show)}>
            show/hide
          </button>
        </div>
        <div
          style={{ marginTop: '30px', height: '400px' }}
          className={`${dark ? 'dark' : ''}`}
        ></div>
        <button className='btn' onClick={() => setDark(!dark)}>
          change color
        </button>
      </div>
    </>
  );
};

export default BookList;
