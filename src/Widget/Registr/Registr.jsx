import s from "./Registr.module.scss";
import log from "../../assets/icons/sms.svg";
import pass from "../../assets/icons/key-square.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signup from "../../services/signup";

const Registr = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== rePassword) {
      setIsLoading(false);
      alert("Passwords should match!");
      return;
    }
    let response = await signup(email, password);
    setIsLoading(false);
    if (response.status === 400) alert("User with this email elready exists!");
    else if (response.status === 500 || response.status === 403) {
      alert("Something went wrong.");
    } else {
      response = await response.json();
      if (response.access_token && response.refresh_token) {
        localStorage.setItem("accessToken", response.access_token);
        localStorage.setItem("refreshToken", response.refresh_token);
        navigate("/dashboard");
      }
    }
  };
  return (
    <div className={s.main}>
      <form className={s.form_signup} onSubmit={handleSignup}>
        <div className={s.span_signup}>
          <span>SignUp</span>
        </div>
        <div className={s.email}>
          <img src={log} alt="login" className={s.svg_mail} />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className={s.email_input}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className={s.pass}>
          <img src={pass} alt="password" className={s.svg_pass} />
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="Password"
            className={s.pass_input}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div className={s.pass2}>
          <img src={pass} alt="password" className={s.svg_pass} />
          <input
            type="password"
            name="re-password"
            id="re-pass"
            placeholder="Re-type password"
            className={s.pass_input}
            onChange={(e) => setRePassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <button className={s.button_signup} disabled={isLoading}>
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
};
export default Registr;
