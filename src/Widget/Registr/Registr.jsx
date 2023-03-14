import s from "./Registr.module.scss";
import log from "../../assets/icons/sms.svg";
import pass from "../../assets/icons/key-square.svg";
import { useState } from "react";

const Registr = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return <div className={s.main}>
        <form className={s.form_signup}>
            <div className={s.span_signup}>
            <span>SignUp</span>
            </div>
            <div className={s.email}>
                <img src={log} alt="login" className={s.svg_mail} />
                <input type="email" name="email" id="email" placeholder="Email" className={s.email_input} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className={s.pass}>
                <img src={pass} alt="password" className={s.svg_pass} />
                <input type="password" name="password" id="pass" placeholder="Password" className={s.pass_input} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className={s.pass2}>
                <img src={pass} alt="password" className={s.svg_pass} />
                <input type="password" name="password" id="pass" placeholder="Re-type password" className={s.pass_input} onChange={e => setPassword(e.target.value)} />
            </div>
            <button className={s.button_signup}>CREATE ACCOUNT</button>
        </form>
    </div>;
}
 
export default Registr;