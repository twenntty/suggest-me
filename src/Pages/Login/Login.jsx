import MenOnLogin from "../../Components/UI/MenOnLogin/MenOnLogin";
import s from "./Login.module.scss";
import SignIn from "../../Widget/SignIn/SignIn";

const Login = () => {
    return ( 
        <div className={s.main}>
            <MenOnLogin />
            <SignIn />
        </div>
     );
}
 
export default Login;