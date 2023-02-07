import style from "./Card.module.scss";

const Card = ({ data }) => {
  return <div className={style.card}>Card movie number {data}</div>;
};

export default Card;
