import ButtonMain from "../../Components/UI/ButtonMain/ButtonMain";
import Card from "../Card/Card";
import InputRadio from "../InputRadio/InputRadio";
import s from "../MainContainer/MainContainer.module.scss";

const data = [
    {
      id: 1,
      title: "GREYHOUND",
      rate: 4,
    },
    {
      id: 2,
      title: "Black Widow",
      rate: 9,
    },
    {
      id: 3,
      title: "ONCE UPON A TIME",
      rate: 5.5,
    },
    {
      id: 4,
      title: "GREYHOUND",
      rate: 3.6,
    },
    {
      id: 5,
      title: "LITTLE WOMEN ",
      rate: 7,
    },
    {
      id: 6,
      title: "Shang Chi",
      rate: 9,
    },
    {
      id: 7,
      title: "Friends",
      rate: 6.5,
    },
    {
      id: 8,
      title: "Loki",
      rate: 7.4,
    },
  ];
  

const MainContainer = () => {
    return <div className={s.main}>
      <div className={s.content}>
                <div className={s.main_header}>
                    <h1>Suggest.me</h1>
                    <span>Discover new and exciting movies with Suggest.me! 
                        <br />
                        <br />
                        Our platform generates a personalized list of films for you to enjoy,<br /> making it easy to find your next favorite.
                        <br />
                        <br />
                        Give it a try and see what the algorithm suggests for you 😉</span>

                        <InputRadio />
                </div>
            <div className={s.main_footer}>
                <div className={s.category_main}>
                    <span className={s.category}>Any</span>
                    <span className={s.num_category}>(120)</span>
                </div>
                <ul className={s.list}>
                    {data.map((item) => {
                        return (
                        <li key={item.id}>
                            <Card data={item} />
                        </li>
                        );
                    })}
                </ul>
                <div className={s.footer_main}>
                    <h3 className={s.footer}>Didin’t find the one you looking for?</h3>
                    <ButtonMain />
                </div>
            </div>
            </div>
        </div>;
}
 
export default MainContainer;