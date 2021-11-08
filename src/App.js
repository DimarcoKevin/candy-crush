import { useState, useEffect } from 'react';

const width = 8;

const candyColors = [
        "blue",
        "green",
        "orange",
        "purple",
        "red",
        "yellow"
];

const App = () => {

  const [currentColorArray, setCurrentColorArray] = useState([]);


  const checkForMatch = () => {
    for (let i = 0; i < 48; i++) {
        const columnMatch = [i, i + width, i + width * 2];
        console.log(columnMatch);
    }
  }

  const createBoard = () => {
    const randomColorArray = [];
    for (let i = 0; i < width * width; i++) {
        const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
        randomColorArray.push(randomColor);
    }
    setCurrentColorArray(randomColorArray);
  }
  

  useEffect(() => {
    createBoard();
    checkForMatch();
  }, [])

  console.log(currentColorArray);
  return (
    <div className="app">
      <div className="game">
        {currentColorArray.map((candyColors, index) => (
          <img
            key={index}
            style={{backgroundColor: candyColors}}
            alt={candyColors}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
