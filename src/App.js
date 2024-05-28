// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import {useState} from 'react';

// function Square(){
//   const [value, setValue] = useState(null)
//   function handleClick(){
//     console.log("Clicked ");
//     setValue('X');
//   }
//   return (
//     <button className="square" onClick={handleClick}>{value}</button>
//   );
// }

function Square({value, onSquareClick}){
  // const [value, setValue] = useState(null)
  //  function onSquareClick(){
  //    console.log("Clicked " + value);
  // //   setValue('X');
  // }
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  );
}

export default function Board(){
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick= (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    // if (xIsNext){
    //   nextSquares[i]="X";
    // }
    // else{
    //   nextSquares[i]="O";
    // }
    nextSquares[i] = xIsNext ? "X" : "O"

    //Toggle
    // nextSquares[i]= nextSquares[i] === "X" ? null : "X";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    console.log("Clicked")

    

  };
  const winner= calculateWinner(squares)
  let gameStatus;
  if (winner) 
    {
      gameStatus= "Winner:" + winner
    }
    else{
      gameStatus= "Next player: " + (xIsNext ? "X" : "O")
    }
  return (
    <>
    <div className="status">
      <h1>{gameStatus}</h1>
    </div>
    <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>      
    </div>
    <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/> 
    </div>
    <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/> 
    </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}