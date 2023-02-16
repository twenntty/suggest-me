import s from "./TitleInfo.module.scss";
const TitleInfo = () => {
  return (
    <div className={s.title_header}>
      <h1>Suggest.me</h1>
      <span>
        Discover new and exciting movies with Suggest.me!
        <br />
        <br />
        Our platform generates a personalized list of films for you to enjoy,
        <br /> making it easy to find your next favorite.
        <br />
        <br />
        Give it a try and see what the algorithm suggests for you 😉
      </span>
    </div>
  );
};

export default TitleInfo;
