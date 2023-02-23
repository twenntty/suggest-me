import s from "./Details.module.scss";
import { DetailsTitle } from "../../Components/UI";
import DetailsProp from "../../Components/UI/DetailsProp/DetailsProp";
// import RateDetails from "../../Components/UI/RateDetails/RateDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();

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
      <div className={s.content}>
        <div className={s.container_img}>
          {/* <img src={movie.poster} alt="poster" /> */}
          {/* <div className={s.title_svg}></div> */}
          <DetailsTitle title={movie.title} backdrop={movie.backdrop} />
        </div>
        <div className={s.container_poster}>
          <img src={movie.poster} alt="main" />
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
