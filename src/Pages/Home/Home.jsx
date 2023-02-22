import s from "./Home.module.scss";
import InputRadio from "../../Widget/InputRadio/InputRadio";
import Card from "../../Widget/Card/Card";
import poster from "../../assets/styles/images/poster.png";
import poster2 from "../../assets/styles/images/poster2.png";
import poster3 from "../../assets/styles/images/poster3.png";
import poster4 from "../../assets/styles/images/poster4.png";
import poster5 from "../../assets/styles/images/poster5.png";
import poster6 from "../../assets/styles/images/poster6.png";
import poster7 from "../../assets/styles/images/poster7.png";
import poster8 from "../../assets/styles/images/poster8.png";
import TitleInfo from "../../Widget/TitleInfo/TitleInfo";
import Button from "../../Components/UI/Button/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Black Widow",
    image: poster,
    about: "Drama, Action | 2020",
    rate: 6.8,
  },
  {
    id: 2,
    title: "Shang Chi",
    image: poster2,
    about: "Drama, Action | 2020",

    rate: 7.9,
  },
  {
    id: 3,
    title: "Loki",
    image: poster3,
    rate: 8.4,
    about: "Drama, Action | 2020",
  },
  {
    id: 4,
    title: "How I Met Your Mother",
    image: poster4,
    about: "Drama, Action | 2020",
    rate: 8.3,
  },
  {
    id: 5,
    title: "Money Heist",
    about: "Drama, Action | 2020",
    image: poster5,
    rate: 8.3,
  },
  {
    id: 6,
    title: "Friends",
    about: "Drama, Action | 2020",
    image: poster6,
    rate: 8.8,
  },
  {
    id: 7,
    title: "The Big Bang Theory",
    about: "Drama, Action | 2020",
    image: poster7,
    rate: 8.1,
  },
  {
    id: 8,
    title: "Two And a Half Men",

    about: "Drama, Action | 2020",
    image: poster8,
    rate: 7,
  },
];

const MainContainer = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("Any");

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://cogitize-practice-suggest.onrender.com/movie/list`
      );
      const data = await response.json();

      setMovies(data);
    } catch (error) {
      console.log("Catch error :", error);
    }
  };

  const getMoviesForQuery = async (value) => {
    try {
      const response = await fetch(
        `https://cogitize-practice-suggest.onrender.com/movie/list?category=${value}`
      );
      const data = await response.json();

      setMovies(data);
    } catch (error) {
      console.log("Catch error :", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleInput = (e) => {
    const value = e.target.id;
    setInputValue(value);

    getMoviesForQuery(value);
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.content_head}>
          <div className={s.title_wrapper}>
            <div className={s.title_container}>
              <TitleInfo />
            </div>
            <div className={s.label_container}>
              <InputRadio onChange={handleInput} value={inputValue} />
              <p className={s.label_name}>
                Any<span>(120)</span>
              </p>
            </div>
          </div>

          <ul className={s.list}>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <Link className={s.link_card} to={`details/${item.id}`}>
                    <Card data={item} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={s.footer_container}>
            <p className={s.footer_text}>
              Didin’t find the one you looking for?
            </p>
            <Button />
          </div>
        </div>
        l
      </div>
    </div>
  );
};

export default MainContainer;
