import s from "./Details.module.scss";
import { DetailsTitle } from "../../Components/UI";
import MyImage1 from "../../assets/styles/images/details1.jpg";
import MyImage2 from "../../assets/styles/images/details3.png";
import DetailsProp from "../../Components/UI/DetailsProp/DetailsProp";
import RateDetails from "../../Components/UI/RateDetails/RateDetails";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";

// const data = [
//   {
//     id: 1,
//     title: "GREYHOUND",
//     about: "Drama, Action | 2020",
//     rate: 4,
//   },
//   {
//     id: 2,
//     title: "Black Widow",
//     about: "Drama, Comedy | 2000",
//     rate: 9,
//   },
//   {
//     id: 3,
//     title: "ONCE UPON A TIME... IN HOLLYWOOD ",
//     about: "Drama, Action | 2011",
//     rate: 5.5,
//   },
//   {
//     id: 4,
//     title: "GREYHOUND",
//     about: "Drama, Action | 2020",
//     rate: 3.6,
//   },
//   {
//     id: 5,
//     title: "LITTLE WOMEN ",
//     about: "Drama | 2019",
//     rate: 7,
//   },
//   {
//     id: 6,
//     title: "DAVID CROSBY: REMEMBER MY NAME",
//     about: "Action | 2000",
//     rate: 9,
//   },
//   {
//     id: 7,
//     title: "AQUARELA",
//     about: "Drama, Action | 2020",
//     rate: 6.5,
//   },
//   {
//     id: 8,
//     title: "LITTLE WOMEN ",
//     about: "Drama, Action | 2020",
//     rate: 7.4,
//   },
// ];

const Details = () => {
  const [movies, setMovie] = useState(data);

  const params = useParams();

  // const movie = useMemo(() => {
  //   return movies.find((item) => item.id === Number(params.id));
  // }, [movies, params]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(
          `https://cogitize-practice-suggest.onrender.com/movie/${params.id}`
        );
        const data = await response.json();

        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [params]);

  const getStringGenres = () => {
    return movie.genres?.map((genre) => genre.name).join(", ");
  };

  const getStringDate = (movieDate) => {
    let string = "";

    if (!movieDate) {
      return string;
    }

    const date = new Date(movieDate);
    string = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    return string;
  };

  return (
    <div className={s.details_container}>
      <DetailsTitle title={movie.title} backdrop={movie.backdrop} />
      <div className={s.content}>
        <div className={s.container_img}>
          <img src={movie.poster} alt="poster" />
          <div className={s.title_svg}></div>
        </div>
        <div className={s.container_poster}>
          <img src={MyImage2} alt="porster" />
        </div>
        <div className={s.detail_block}>
          <p className={s.title}>{movie.tagline}</p>
          <p className={s.description}>{movie.description}</p>

          <div className={s.prop_list}>
            {/* <RateDetails rate={8.3} /> */}
            <DetailsProp
              isRate={true}
              label={"Rate"}
              value={movie.rating?.toFixed(1)}
            />
            <br />
            <br />
            <br />
            {/* <DetailsProp label={"Type"} value={"Movie"} />
            <DetailsProp label={"Release Date"} value={"2019-04-24"} />
            <DetailsProp label={"Run time"} value={"181 min"} />
            <DetailsProp
              label={"Genres"}
              value={"Adventure,  Science Fiction, Action"}
            /> */}
            <DetailsProp label={"Type"} value={movie.type} />
            <DetailsProp
              label={"Release Date"}
              value={getStringDate(movie.date)}
            />
            <DetailsProp
              label={"Genres"}
              value={getStringGenres(movie.genres)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
