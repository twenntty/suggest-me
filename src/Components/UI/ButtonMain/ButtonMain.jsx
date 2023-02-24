import s from "./ButtonMain.module.scss";

const ButtonMain = ({ handleClick }) => {
    return ( 
        <button onClick={handleClick} className={s.button}>Suggest more</button>
     );
}
 
export default ButtonMain;