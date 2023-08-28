import { useState } from 'react';
import './Change.css';
const BookList = () => {
  const [simpleColor, setSimpleColor] = useState('red');
  const [hexColor, setHexColor] = useState('#cccccc');
  const [activeTab, setActiveTab] = useState('simple');
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'brown',
    'pink',
  ];

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  const changeSimpleColor = () => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber);

    // get the color from the array
    let randomColor = colors[randomNumber];
    setSimpleColor(randomColor);
    // document.body.style.background = randomColor;
  };

  const changeHexColor = () => {
    let color = '#';
    // #ffffff
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * hex.length);
      color += hex[randomNumber];
    }
    setHexColor(color);
  };
  return (
    <div
      style={{
        backgroundColor: `${activeTab === 'simple' ? simpleColor : hexColor}`,
      }}
      className='bookPage'
    >
      <nav>
        <div className='container'>
          <div className='d-flex justify-between align-items-center'>
            <h2>Color Flipper</h2>
            <ul className='nav-links d-flex'>
              <li
                className={`${activeTab === 'simple' ? 'activeTab' : ''} tab`}
                onClick={() => setActiveTab('simple')}
              >
                <h5>Simple</h5>
              </li>
              <li
                className={`${activeTab === 'simple' ? '' : 'activeTab'} tab`}
                onClick={() => setActiveTab('hex')}
              >
                <h5>Hex</h5>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className='container'>
          <div className='d-flex justify-center align-items-center h-100'>
            <div className='content text-center'>
              <h2 className='color-text'>
                Background Color:{' '}
                <span className='color'>
                  {activeTab === 'simplecolor' ? simpleColor : hexColor}
                </span>
              </h2>
              {activeTab === 'simplecolor' && (
                <button className='btn' onClick={changeSimpleColor}>
                  Change Color
                </button>
              )}
              {activeTab !== 'simplecolor' && (
                <button className='btn' onClick={changeHexColor}>
                  Change Color
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookList;
