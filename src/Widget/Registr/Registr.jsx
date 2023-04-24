import s from "./Registr.module.scss";
import log from "../../assets/icons/sms.svg";
import pass from "../../assets/icons/key-square.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Registr = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rePassword, setRePassword] = useState();

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      if(password !== rePassword) 
      {
        setIsLoading(false);
        alert("Passwords must match!")
        return;
      }
      let result = await fetch("https://practice-api-vlasenko-bohdan.onrender.com/user/signup", {
        method: 'post',
        body:JSON.stringify({email, password}),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      setIsLoading(false)
      if(result.status === 500 || result.status === 403)
      {
        alert("Something went wrong.");
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
    return <div className={s.main}>
        <form className={s.form_signup} onSubmit={handleSignup}>
            <div className={s.span_signup}>
            <span>SignUp</span>
            </div>
            <div className={s.email}>
                <img src={log} alt="login" className={s.svg_mail} />
                <input type="email" name="email" id="email" placeholder="Email" className={s.email_input} onChange={e => setEmail(e.target.value)} disabled={isLoading}/>
            </div>
            <div className={s.pass}>
                <img src={pass} alt="password" className={s.svg_pass} />
                <input type="password" name="password" id="pass" placeholder="Password" className={s.pass_input} onChange={e => setPassword(e.target.value)} disabled={isLoading}/>
            </div>
            <div className={s.pass2}>
                <img src={pass} alt="password" className={s.svg_pass} />
                <input type="password" name="re-password" id="re-pass" placeholder="Re-type password" className={s.pass_input} onChange={e => setRePassword(e.target.value)} disabled={isLoading}/>
            </div>
            <button className={s.button_signup} disabled={isLoading}>CREATE ACCOUNT</button>
        </form>
    </div>;
}
export default Registr;