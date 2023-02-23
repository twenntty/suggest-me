import s from "./Details.module.scss";
import { DetailsTitle } from "../../Components/UI";
import DetailsProp from "../../Components/UI/DetailsProp/DetailsProp";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(
          `https://cogitize-practice-suggestmovies.onrender.com/movie/${params.id}`
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
          <DetailsTitle
            title={movie.title}
            backdrop={movie.backdrop}
            category={getStringGenres(movie.genres)}
          />
        </div>
        <div className={s.container_poster}>
          <img src={movie.poster} alt="main" />
        </div>
        <div className={s.detail_block}>
          <p className={s.title}>{movie.tagline}</p>
          <p className={s.description}>{movie.description}</p>
          <div className={s.prop_list}>
            <DetailsProp
              isRate={true}
              label={"Rate"}
              value={movie.rating?.toFixed(1)}
            />

            <br />

            <DetailsProp label={"Type"} value={movie.type} />
            <DetailsProp
              label={"Release Date"}
              value={getStringDate(movie.date)}
            />
            <DetailsProp label={"Run time"} value={movie.runtime} />
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
