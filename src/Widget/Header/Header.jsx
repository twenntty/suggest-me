import styles from "./Header.module.scss";
import icons from "../../assets/icons/logo.svg";
import arrow from "../../assets/icons/arrow-right.svg";
import logout from "../../assets/icons/logout.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const logOut = async () =>
  {
    let result = await fetch("https://practice-api-vlasenko-bohdan.onrender.com/user/login", {
        method: 'post',
        body: JSON.stringify({ refreshToken: localStorage.refreshToken }),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
    console.log(result.status);
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
                  <div className={styles.logout}>
                      <Link onClick={logOut}>
                        <img src={logout} alt="logout" />
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
