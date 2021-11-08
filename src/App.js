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


  const ColumnTripleMatch = () => {
    for (let i = 0; i < 48; i++) {
      const columnMatch = [i, i + width, i + width * 2];
      const chosenColor = currentColorArray[i];
      
      if (columnMatch.every(square => currentColorArray[square] === chosenColor)) {
        columnMatch.forEach(square => currentColorArray[square] = '')   
      }
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
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      ColumnTripleMatch();
      setCurrentColorArray([...currentColorArray]);
    }, 100)
    return () => clearInterval(timer)
  }, [ColumnTripleMatch, currentColorArray])

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
