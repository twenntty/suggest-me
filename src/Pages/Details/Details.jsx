import s from "./Details.module.scss";
import MyImage1 from "../../assets/styles/images/details1.jpg";
import MyImage2 from "../../assets/styles/images/details3.png";
import DetailsProp from "../../Components/UI/DetailsProp/DetailsProp";
import RateDetails from "../../Components/UI/RateDetails/RateDetails";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";

const data = [
  {
    id: 1,
    title: "GREYHOUND",
    about: "Drama, Action | 2020",
    rate: 4,
  },
  {
    id: 2,
    title: "Black Widow",
    about: "Drama, Comedy | 2000",
    rate: 9,
  },
  {
    id: 3,
    title: "ONCE UPON A TIME... IN HOLLYWOOD ",
    about: "Drama, Action | 2011",
    rate: 5.5,
  },
  {
    id: 4,
    title: "GREYHOUND",
    about: "Drama, Action | 2020",
    rate: 3.6,
  },
  {
    id: 5,
    title: "LITTLE WOMEN ",
    about: "Drama | 2019",
    rate: 7,
  },
  {
    id: 6,
    title: "DAVID CROSBY: REMEMBER MY NAME",
    about: "Action | 2000",
    rate: 9,
  },
  {
    id: 7,
    title: "AQUARELA",
    about: "Drama, Action | 2020",
    rate: 6.5,
  },
  {
    id: 8,
    title: "LITTLE WOMEN ",
    about: "Drama, Action | 2020",
    rate: 7.4,
  },
];

const Details = () => {
  const [movies, _] = useState(data);

  const params = useParams();

  const movie = useMemo(() => {
    return movies.find((item) => item.id === Number(params.id));
  }, [movies, params]);

  return (
    <div className={s.details_container}>
      <div className={s.content}>
        <div className={s.container_img}>
          <img src={MyImage1} alt="poster" />
          <div className={s.title_svg}></div>
        </div>
        <div className={s.container_poster}>
          <img src={MyImage2} alt="porster" />
        </div>
        <div className={s.detail_block}>
          <p className={s.title}>Part of the journey is the end.</p>
          <p className={s.description}>
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </p>

          <div className={s.prop_list}>
            <RateDetails rate={8.3} />
            <br />
            <br />
            <br />
            <DetailsProp label={"Type"} value={"Movie"} />
            <DetailsProp label={"Release Date"} value={"2019-04-24"} />
            <DetailsProp label={"Run time"} value={"181 min"} />
            <DetailsProp
              label={"Genres"}
              value={"Adventure,  Science Fiction, Action"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
