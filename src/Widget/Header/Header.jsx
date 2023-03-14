import styles from "./Header.module.scss";
import icons from "../../assets/icons/logo.svg";
import arrow from "../../assets/icons/arrow-right.svg";
import logout from "../../assets/icons/logout.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return <header className={styles.header}>
            <Link to="/">
            <img src={icons} alt="logo"/>
            </Link>

            if(localStorage.accessToken){
              <div className={styles.menu}>
                  <div className={styles.menu}>
                    <Link to="Dashboard">
                      <span>Dashboard</span>
                    </Link>
                    <a href="#">Suggestions</a>
                    <a href="#">Add</a>
                  </div>
                  <div className={styles.logout}>
                      <Link>
                        <img src={logout} alt="logout" />
                        <span>Logout</span>
                      </Link>
                  </div>
              </div>
            }
            
            else {
            <div className={styles.menu}>
              <div className={styles.tablets}>
                  <a href="#">Movies</a>
                  <a href="#">TV Shows</a>
              </div>
                <div className={styles.suggest}>
                  <Link to="login">
                  <span>Suggest me</span>
                  <img src={arrow} alt="arrow" />
                  </Link>
                </div>
            </div> 
            }
        </header>;
};

export default Header;
