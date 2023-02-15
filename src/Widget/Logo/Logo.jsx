import s from "./Logo.module.scss";
import icon from "../../assets/icons/Vector.svg";

const Logo = () => {
  return (
    <div className={s.logo - container}>
      <img src={icon} alt="Logo" />
    </div>
  );
};

export default Logo;
