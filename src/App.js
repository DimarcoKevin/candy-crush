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

  const ColumnQuadMatch = () => {
    for (let i = 0; i < 39; i++) {
      const columnMatch = [i, i + width, i + width * 2, i + width * 3];
      const chosenColor = currentColorArray[i];
      
      if (columnMatch.every(square => currentColorArray[square] === chosenColor)) {
        columnMatch.forEach(square => currentColorArray[square] = '')   
      }
    }
  }

  const ColumnTripleMatch = () => {
    for (let i = 0; i < 48; i++) {
      const columnMatch = [i, i + width, i + width * 2];
      const chosenColor = currentColorArray[i];
      
      if (columnMatch.every(square => currentColorArray[square] === chosenColor)) {
        columnMatch.forEach(square => currentColorArray[square] = '')   
      }
    }
  }

  const RowQuadMatch = () => {
    for (let row = 0; row < 8; row++) {
      const rowAdd = row * 8;
      for (let i = 0; i < 5; i++) {
        const columnMatch = [i + rowAdd, i + rowAdd + 1, i + rowAdd + 2, i + rowAdd + 3];
        const chosenColor = currentColorArray[i + rowAdd];
        
        if (columnMatch.every(square => currentColorArray[square] === chosenColor)) {
          columnMatch.forEach(square => currentColorArray[square] = '')   
        }
      }
    }
  }

  const RowTripleMatch = () => {
    for (let row = 0; row < 8; row++) {
      const rowAdd = row * 8;
      for (let i = 0; i < 6; i++) {
        const columnMatch = [i + rowAdd, i + rowAdd + 1, i + rowAdd + 2];
        const chosenColor = currentColorArray[i + rowAdd];
        
        if (columnMatch.every(square => currentColorArray[square] === chosenColor)) {
          columnMatch.forEach(square => currentColorArray[square] = '')   
        }
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
      ColumnQuadMatch();
      RowQuadMatch()
      ColumnTripleMatch();
      RowTripleMatch();
      setCurrentColorArray([...currentColorArray]);
    }, 100)
    return () => clearInterval(timer)
  }, [ColumnQuadMatch, RowQuadMatch, ColumnTripleMatch, RowTripleMatch, currentColorArray])

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
