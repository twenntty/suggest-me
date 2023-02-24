import s from "./ButtonLogin.module.scss";

const ButtonLogin = ({handleLogin}) => {
    return ( 
        <button className={s.button_login} onClick={handleLogin} >Login</button>
     );
}
 
export default ButtonLogin;