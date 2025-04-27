import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gabeBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updateBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });

    onSelectSquare();
  }
  return (
    <ol id="game-board">
      {gabeBoard.map((row, rewIndex) => (
        <li key={rewIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rewIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
