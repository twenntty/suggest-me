import s from "./RateDetails.module.scss";
import icon from "../../../assets/styles/icons/star.svg";

const RateDetails = ({ rate }) => {
  return (
    <div className={s.rate}>
      <img src={icon} alt="star" /> <span>{rate}</span>
    </div>
  );
};

export default RateDetails;
