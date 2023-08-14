import propTypes from 'prop-types';

const Book = ({ img, desc, author, title }) => {
  const handleClick = (title) => {
    console.log(title);
  };
  return (
    <div className='book' onClick={() => handleClick(title)}>
      <img src={img} />
      <h4 className='title'>{title}</h4>
      <p className='desc'>{desc}</p>
      <p className=''>by {author}</p>
    </div>
  );
};

Book.propTypes = {
  img: propTypes.string,
  desc: propTypes.string,
  author: propTypes.string,
  title: propTypes.string,
};

export default Book;
