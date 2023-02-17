import s from "./Titlemenu.module.scss";
import arrow from "../../assets/styles/icons/arrow-right.svg";

const Titlemenu = () => {
  return (
    <div className={s.container_menu}>
      <a href="/" className={s.link_mov}>
        Movies
      </a>
      <a href="/" className={s.link_show}>
        TV Shows
      </a>
      <a href="/" className={s.link_suqq}>
        Suggest me
      </a>
      <a href="/" className={s.text_up}>
        <img src={arrow} alt="arrow" />
      </a>
    </div>
  );
};

export default Titlemenu;
