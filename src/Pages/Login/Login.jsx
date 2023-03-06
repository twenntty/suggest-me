import MenOnLogin from "../../Components/UI/MenOnLogin/MenOnLogin";
import s from "./Login.module.scss";
import SignIn from "../../Widget/SignIn/SignIn";
import { useEffect } from "react";

const Login = () => {
    useEffect(() => {
        document.title = 'Login | Suggest.me';
      }, []);
    return ( 
        <div className={s.main}>
            <MenOnLogin />
            <SignIn />
        </div>
     );
}
 
export default Login;