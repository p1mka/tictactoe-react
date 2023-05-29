import styles from "./render-square.module.css";
import PropTypes from "prop-types";

export function Square({ value, onClick }) {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
