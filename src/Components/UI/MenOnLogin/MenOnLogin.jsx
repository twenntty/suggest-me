import s from "./MenOnLogin.module.scss";
import men from "../../../assets/img/men.png";

const MenOnLogin = () => {
    return ( 
        <div className={s.block}>
            <img src={men} alt="men" className={s.men} />
        </div>
     );
}
 
export default MenOnLogin;