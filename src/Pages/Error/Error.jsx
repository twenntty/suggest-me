import s from "./Error.module.scss";
import oops from "../../assets/img/oops_error.png";
import { useEffect } from "react";

const Error = () => {
    useEffect(() => {
        document.title = '404 | Suggest.me';
      }, []);
    return ( 
        <div className={s.main_container}>
            <img src={oops} alt="oops" className={s.img_oops} />
            <span className={s.lost_span}>Lost your way?</span>
            <span className={s.oops_span}>Oops! This is awkward. You are looking for something that doesn't actually exist.</span>
            <form action="#">
                <button className={s.back_on_main}>Go Home</button>
            </form>
        </div>
     );
}
 
export default Error;