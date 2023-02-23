// import { Rate } from "../";
import RateDetails from "../RateDetails/RateDetails";
import s from "./DetailsProp.module.scss";

const DetailsProps = ({ isRate, RateStar, label, isRunTime, value }) => {
  if (!value) return null;
  return (
    <div className={s.detail_prop}>
      <span>{label}</span>
      {isRate ? <RateDetails rate={value} /> : <span>{value}</span>}
    </div>
  );
};

export default DetailsProps;
