import styles from "./Welcome.module.css";

function Welcome({ children }) {
  return <h2 className={styles.h2}>{children}</h2>;
}

export default Welcome;
