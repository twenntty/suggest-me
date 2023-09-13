import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonMain from "../../Components/UI/ButtonMain/ButtonMain";
import Card from "../../Widget/Card/Card";
import InputRadio from "../../Widget/InputRadio/InputRadio";
import s from "./Home.module.scss";
import LoadingFilms from "../../Components/UI/LoadingFilms/LoadingFilms";
import getMoviesFromApi from "../../services/getMoviesFromApi";
import getNewTokens from "../../services/getNewTokens";
import getMoviesForQueryFromApi from "../../services/getMoviesForQueryFromApi";


const MainContainer = () => {

  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("Any");
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
      try {
        setIsLoading(true);
        let response = await getMoviesFromApi();
        if (response.status === 401) {
          if (await getNewTokens())
            response = await getMoviesFromApi();
          else {
            return localStorage.clear();
          }
        }
        const data = await response.json();
        setMovies(data);
       
        setIsLoading(false)
      } catch (error) {
        console.log("Catch error :", error);
      }
    }

  useEffect (() => {
    document.title = 'Home | Suggest.me';
    getMovies();
  }, []);



  const getMoviesForQuery = async (value, manual = false) => {
    try {
      setIsLoading(true);
      let response = await getMoviesForQueryFromApi(value, manual);
      if (response.status === 401) {
        if (await getNewTokens())
          response = await getMoviesForQueryFromApi(value, manual);
        else {
          return localStorage.clear();
        }
      }
      const data = await response.json();
      setMovies(data);
      setIsLoading(false)
    } catch (error) {
      console.log("Catch error :", error);
    }
  };

  const handleInput = (e) => {
    const value = e.target.id;
    setInputValue(value);
    getMoviesForQuery(value);
  };

  const handleClick = () => {
    const manual = true;
    getMoviesForQuery(inputValue, manual);
  };


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
                  
                        <InputRadio onChange={handleInput} value={inputValue} />
                </div>
            {isLoading ? (<LoadingFilms />)
              :
              (<div className={s.main_footer}>
                <div className={s.category_main}>
                    <span className={s.category}>{inputValue}</span>
                    <span className={s.num_category}>({movies.length})</span>
                </div>
                <ul className={s.list}>
                    {movies.map((item) => {
                        return (
                        <li key={item.id}>
                          <Link to={`details/${item.id}`}>
                            <Card data={item} />
                            </Link>
                        </li>
                        );
                    })}
                </ul>
                <div className={s.footer_main}>
                    <h3 className={s.footer}>Didin’t find the one you looking for?</h3>
                    <ButtonMain handleClick={handleClick}/>
                </div>
            </div>)
              }
            
            </div>
        </div>;
}
 
export default MainContainer;