import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Titlemenu from "../Titlemenu/Titlemenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Titlemenu />
    </header>
  );
};

export default Header;
