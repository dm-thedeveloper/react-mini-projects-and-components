import React, { useState } from 'react';

const TicTacToe = () => {
  // Initialize the board and other states
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // Check if there's a winner after each move
  const checkWinner = (newBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }

    return null;
  };

  // Handle a square click event
  const handleClick = (index) => {
    
    if (board[index] || winner) return; // Ignore if square is already filled or we have a winner

    const newBoard = newFunction(board, index, isXNext, setBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setIsXNext(!isXNext);
    }
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  // Render each square in the grid
  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  return (
    <div className="game">
      <h2>Tic Tac Toe</h2>
      <div className="board">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="status">
        {winner ? (
          <h3>Winner: {winner}</h3>
        ) : (
          <h3>Next Player: {isXNext ? 'X' : 'O'}</h3>
        )}
      </div>
      <button onClick={resetGame}>Reset Game</button>

      <style>{`
        .game {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .board {
          display: grid;
          grid-template-columns: repeat(3, 100px);
          gap: 5px;
          margin-top: 20px;
        }
        .square {
          width: 100px;
          height: 100px;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background-color: #eee;
          border: 1px solid #333;
        }
        .status {
          margin-top: 20px;
        }
        button {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 1rem;
        }
      `}</style>
      
    </div>
  );
};

export default TicTacToe;


function newFunction(board, index, isXNext, setBoard) {
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    return newBoard;
}

