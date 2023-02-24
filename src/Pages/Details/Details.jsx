import BigPoster from "../../Components/UI/BigPoster/BigPoster";
import NameFilm from "../../Components/UI/NameFilm/NameFilm"
import s from "./Details.module.scss";
import DetailsAbout from "../../Components/UI/DetailsAbout/DetailsAbout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {

    const [movie, setMovie] = useState({});

    const params = useParams();

    useEffect (() => {
      if(!params.id) return
      const getMovie = async () => {
        try {
          const response = await fetch(
            `https://practice-api-vlasenko-bohdan.onrender.com/movie/${params.id}`
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
        <div className={s.main}>
            <BigPoster backdrop={movie.backdrop} />
            <div className={s.about_film}>
                <NameFilm title={movie.title} category={getStringGenres(movie.genres)}/>
                <div className={s.details}>
                    <img src={movie.poster} alt="poster" className={s.movie_poster}/>
                    <div className={s.detail_block}>
                        <p className={s.title}>{movie.tagline}</p>
                        <p className={s.description}>{movie.description}</p>

                        <div className={s.prop_list}>
                        <DetailsAbout isRate={true} value={movie.rating?.toFixed(1)} />
                        <DetailsAbout label={"Type"} value={movie.type} />
                        <DetailsAbout label={"Release Date"} value={getStringDate(movie.date)} />
                        <DetailsAbout isRunTime={true} label={"Run time"} value={movie.runtime} />
                        <DetailsAbout label={"Genres"} value={getStringGenres(movie.genres)} />
                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Details;