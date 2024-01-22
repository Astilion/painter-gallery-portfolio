import styles from "./BurgerMenu.module.css";
const BurgerMenu = ({ isNavOpen, toggleNav }) => {
  return (
    <button
      className={`group ml-auto p-3 md:hidden ${isNavOpen ? styles.cross : styles.burger}`}
      onClick={toggleNav}
    >
      <div
        className={`${styles.line} ${styles.burger} ${isNavOpen ? "" : styles.opacity1}`}
      ></div>
      <div
        className={`${styles.line} ${styles.cross} ${
          isNavOpen ? styles.rotateMinus45 : styles.opacity0
        }`}
      ></div>
      <div
        className={`${styles.line} ${styles.cross} ${
          isNavOpen ? styles.rotate45 : styles.opacity0
        }`}
      ></div>
    </button>
  );
};

export default BurgerMenu;
