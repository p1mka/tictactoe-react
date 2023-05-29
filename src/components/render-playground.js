import { calculateWinner } from "./utils";
import styles from "./render-playground.module.css";
import { Square } from "./render-square";
import PropTypes from "prop-types";

export function Playground({ xIsNext, squares, onPlay }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  function onClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Победитель: " + winner;
  } else {
    status = "Ход:" + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className={styles.status}>{status}</div>
      <div>
        {numbers.map((number) => (
          <Square
            value={squares[number]}
            key={number}
            onClick={() => onClick(number)}
          />
        ))}
      </div>
    </>
  );
}

Playground.propTypes = {
  xIsNext: PropTypes.bool,
  squares: PropTypes.array,
  onPlay: PropTypes.func,
};
