import style from "./Card.module.scss";
import Rate from "../../Components/UI/Rate/Rate";
// import poster from "../../assets/styles/images/poster.png";

// const Card = ({ data }) => {
//   return <div className={style.card}>Card movie number {data}</div>;
// };

// export default Card;

const Card = ({ data }) => {
  return (
    <div className={style.card}>
      {/* <img src={poster} alt="poster" /> */}
      <img src={data.image} alt="Card" />
      <div className={style.card_footer}>
        <span className={style.card_title}>{data.title}</span>
        <span className={style.card_about}>{data.about}</span>
      </div>

      <div className={style.rate_container}>
        <Rate rate={data.rate} />
      </div>
    </div>
  );
};

export default Card;
