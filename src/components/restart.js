import styles from "./restart.module.css";
import PropTypes from "prop-types";

export function Restart({ setMoves, setCurrentMove }) {
  return (
    <div>
      <button
        className={styles.restart}
        onClick={() => {
          setMoves([Array(9).fill(null)]);
          setCurrentMove(0);
        }}
      >
        Начать заново
      </button>
    </div>
  );
}

Restart.propTypes = {
  setMoves: PropTypes.func,
  setCurrentMove: PropTypes.func,
};
