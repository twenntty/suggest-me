import s from "../Rate/Rate.module.scss";
import star from "../../../assets/icons/star.svg";

const Rate = ({ rate }) => {
    return (
        <div className={s.rate}>
            <img src={star} alt="star" />
            <span className={s.rating}>{rate}</span>
        </div>
    );
}
 
export default Rate;