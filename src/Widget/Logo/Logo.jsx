import s from "./Logo.module.scss";
import icon from "../../assets/styles/icons/icon.svg";

const Logo = () => {
  return (
    <div className={s.logo_container}>
      <a href="/">
        <img src={icon} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
