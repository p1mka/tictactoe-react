import { useState } from "react";

import styles from "./App.module.css";
import { Playground } from "./components/render-playground";
import { Restart } from "./components/restart";

export default function App() {
  const [moves, setMoves] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = moves[currentMove];

  function handlePlay(nextSquares) {
    const nextMove = [...moves.slice(0, currentMove + 1), nextSquares];
    setMoves(nextMove);
    setCurrentMove(nextMove.length - 1);
  }

  return (
    <div className={styles.playground}>
      <Playground
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
      />
      <Restart setMoves={setMoves} setCurrentMove={setCurrentMove} />
    </div>
  );
}
