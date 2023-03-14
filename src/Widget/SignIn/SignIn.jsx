import s from "./SignIn.module.scss";
import log from "../../assets/icons/sms.svg" ;
import pass from "../../assets/icons/key-square.svg" ;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
      e.preventDefault();
      let result = await fetch("https://practice-api-vlasenko-bohdan.onrender.com/user/login", {
        method: 'post',
        body:JSON.stringify({email,password}),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      if(result.status === 403)
      {
        alert("Invalid email or password");
      } 
      else{
        result = await result.json();
        if(result.accessToken && result.refreshToken) {
            localStorage.setItem('accessToken', result.accessToken);
            localStorage.setItem('refreshToken', result.refreshToken);
            navigate('/dashboard')
        }
      }
      

    }
    return ( 
        <form className={s.form_login} onSubmit={handleLogin}>
            <div className={s.span_login}>
            <span>Login</span>
            </div>
            <div className={s.email}>
                <img src={log} alt="login" className={s.svg_mail} />
                <input type="email" name="email" id="email" placeholder="Email" className={s.email_input} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className={s.pass}>
                <img src={pass} alt="password" className={s.svg_pass} />
                <input type="password" name="password" id="pass" placeholder="Password" className={s.pass_input} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className={s.button_login}>Login</button>

            <div className={s.dont_have}>
                <span>Don't have an account?</span>
                <Link to="/Signup">
                    <span>Sign Up</span>
                </Link>
            </div>
        </form>
     );
}
 
export default SignIn;