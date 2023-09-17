import styles from "./Header.module.scss";
import icons from "../../assets/icons/logo.svg";
import arrow from "../../assets/icons/arrow-right.svg";
import logoutIcon from "../../assets/icons/logout.svg";
import logout from "../../services/logout";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const logOut = async () =>
  {
    let result = await logout()
    localStorage.clear();
    navigate('/')
  }

  if(localStorage.accessToken){
    return <header className={styles.header}>
            <Link to="/">
            <img src={icons} alt="logo"/>
            </Link>
            <div className={styles.menu}>
                  <div className={styles.menu}>
                    <Link to="Dashboard">
                      <span>Dashboard</span>
                    </Link>
                    <a href="/">Suggestions</a>
                  </div>
                  <div className={styles.logoutIcon}>
                      <Link onClick={logOut}>
                        <img src={logoutIcon} alt="logoutIcon" />
                        <span>Logout</span>
                      </Link>
                  </div>
              </div>
              </header>;
  }
  return <header className={styles.header}>
          <Link to="/">
          <img src={icons} alt="logo"/>
          </Link>
            <div className={styles.menu}>
                <div className={styles.suggest}>
                  <Link to="login">
                  <span>Suggest me</span>
                  <img src={arrow} alt="arrow" />
                  </Link>
                </div>
            </div> 
            </header>;
            
};

export default Header;
