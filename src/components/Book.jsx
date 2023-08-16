import propTypes from 'prop-types';

const Book = ({ img, desc, author, title, removeBook }) => {
  const handleClick = (title) => {
    console.log(title);
  };
  return (
    <div className='book' onClick={() => handleClick(title)}>
      <img src={img} />
      <h4 className='title'>{title}</h4>
      <p className='desc'>{desc}</p>
      <p className=''>by {author}</p>
      <button className='btn' onClick={removeBook}>
        Remove Book
      </button>
    </div>
  );
};

Book.propTypes = {
  id: propTypes.number,
  img: propTypes.string,
  desc: propTypes.string,
  author: propTypes.string,
  title: propTypes.string,
  removeBook: propTypes.func,
};

export default Book;
