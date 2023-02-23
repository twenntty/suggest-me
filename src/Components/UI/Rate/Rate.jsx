import s from "./Rate.module.scss";
import icon from "../../../assets/styles/icons/star.svg";

const Rate = ({ rate, value, label }) => {
  return (
    <div className={s.rate}>
      <img src={icon} alt="star" /> <span>{rate}</span>
    </div>
  );
};

export default Rate;
