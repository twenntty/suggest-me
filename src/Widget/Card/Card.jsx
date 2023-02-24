import style from "./Card.module.scss";
import Rate from "../../Components/UI/Rate/Rate";

const Card = ({ data }) => {
  return <div className={style.card}>
            <img src={data.poster} alt="poster" className={style.img} />
            <span className={style.film_name}>{data.title}</span>
            <div className={style.rate}>
              <Rate rate={data.rating.toFixed(1)} />
            </div>
  </div>;
};

export default Card;
