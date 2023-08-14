// jsx rules
// return on element
// use a div, section, fragment
// use className instead class
// close every element
// const BookList = () => {};

import './App.css';
// const desc = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi magni blanditiis dicta quidem eos aut molestiae? Aliquid, tempora.
// Consequatur natus facilis doloribus voluptates eligendi aliquid, modi esse
// non nulla.`;
// const img = `https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL254_SR254,254_.jpg`;
import Book from './components/Book';
const books = [
  {
    id: 1,
    title: `The Rabbit Hutch: A novel`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi magni blanditiis dicta quidem eos aut molestiae? Aliquid, tempora.
    Consequatur natus facilis doloribus voluptates eligendi aliquid, modi esse
    non nulla.`,
    author: `Favour Okon`,
    img: `https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL254_SR254,254_.jpg`,
  },
  {
    id: 2,
    title: `The Rabbit Hump:`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi magni blanditiis dicta quidem eos aut molestiae? Aliquid, tempora.
    Consequatur natus facilis doloribus voluptates eligendi aliquid, modi esse
    non nulla.`,
    author: `Austin Okon`,
    img: `https://images-na.ssl-images-amazon.com/images/I/81o-PyNHxbL._AC_UL127_SR127,127_.jpg`,
  },
  {
    id: 3,
    title: `Harry Potter`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi magni blanditiis dicta quidem eos aut molestiae? Aliquid, tempora.
    Consequatur natus facilis doloribus voluptates eligendi aliquid, modi esse
    non nulla.`,
    author: `Michael`,
    img: `https://images-na.ssl-images-amazon.com/images/I/71aXWhr9tTL._AC_UL127_SR127,127_.jpg`,
  },
  {
    id: 4,
    title: `Spiderman`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi magni blanditiis dicta quidem eos aut molestiae? Aliquid, tempora.
    Consequatur natus facilis doloribus voluptates eligendi aliquid, modi esse
    non nulla.`,
    author: `John Doe`,
    img: `https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL254_SR254,254_.jpg`,
  },
  {
    id: 5,
    title: `Carrot and Sticks`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi magni blanditiis dicta quidem eos aut molestiae? Aliquid, tempora.
    Consequatur natus facilis doloribus voluptates eligendi aliquid, modi esse
    non nulla.`,
    author: `Bugs Bunny`,
    img: `https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL254_SR254,254_.jpg`,
  },
  {
    id: 6,
    title: `Nine tailed fox`,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quasi magni blanditiis dicta quidem eos aut molestiae? Aliquid, tempora.
    Consequatur natus facilis doloribus voluptates eligendi aliquid, modi esse
    non nulla.`,
    author: `Christoper Columbus`,
    img: `https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL254_SR254,254_.jpg`,
  },
];

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

const BookList = () => {
  return (
    <>
      <div className='books-container'>
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </>
  );
};

export default BookList;
