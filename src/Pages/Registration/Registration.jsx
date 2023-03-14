import s from "./Registration.module.scss";
import MenOnLogin from "../../Components/UI/MenOnLogin/MenOnLogin";
import Registr from "../../Widget/Registr/Registr";
import { useEffect } from "react";

const Registration = () => {
    useEffect(() => {
        document.title = 'SignUp | Suggest.me';
      }, []);
    return <div className={s.container}>
        <MenOnLogin />
        <Registr />
    </div>;
}
 
export default Registration;