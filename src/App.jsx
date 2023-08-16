// jsx rules
// return on element
// use a div, section, fragment
// use className instead class
// close every element
// const BookList = () => {};

import { useState } from 'react';
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

  console.log(text);

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
    </>
  );
};

export default BookList;
