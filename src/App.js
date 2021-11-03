import { useState, useEffect } from 'react';

const width = 10;
const height = 10;
const candyColors = [
        "blue",
        "green",
        "orange",
        "pruple",
        "red",
        "yellow"
];

const App = () => {

  const [currentColorArray, setCurrentColorArray] = useState([]);

  const createBoard = () => {
    const randomColorArray = [];
    for (let i = 0; i < width * height; i++) {
        const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
        randomColorArray.push(randomColor);
    }
    setCurrentColorArray(randomColorArray);
  }
  

  useEffect(() => {
    createBoard();
  }, [])

  console.log(currentColorArray);
  return (
    <div></div>
  );
}

export default App;
