

const width = 8;
const height = 8;
const candyColors = [
        "blue",
        "green",
        "orange",
        "pruple",
        "red",
        "yellow"
];

const App = () => {

  const createBoard = () => {
    const randomColorArray = [];
    for (let i = 0; i < width * height; i++) {
        const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
        randomColorArray.push(randomColor);
    }
    console.log(randomColorArray);
  }
  createBoard();
  return (
    <div></div>
  );
}

export default App;
