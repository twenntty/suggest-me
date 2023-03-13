import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonMain from "../../Components/UI/ButtonMain/ButtonMain";
import Card from "../../Widget/Card/Card";
import InputRadio from "../../Widget/InputRadio/InputRadio";
import s from "./Home.module.scss";

const API_URL = "https://practice-api-vlasenko-bohdan.onrender.com";

const MainContainer = () => {

  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("Any");
  const [headers, setHeaders, getHeaders] = useState({});

  const getMovies = async () => {
      try {
        if(localStorage.accessToken) setHeaders({'Authorization': `Bearer ${localStorage.accessToken}`})
        const response = await fetch(`${API_URL}/movie/list`, { getHeaders });
        const data = await response.json();
        setMovies(data);
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
      if(localStorage.accessToken) setHeaders({'Authorization': `Bearer ${localStorage.accessToken}`})
      const response = await fetch(
        `${API_URL}/movie/list?genre=${value}&manual=${manual}`, { headers });
      const data = await response.json();
      setMovies(data);
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
            <div className={s.main_footer}>
                <div className={s.category_main}>
                    <span className={s.category}>{inputValue}</span>
                    <span className={s.num_category}>({movies.length})</span>
                </div>
                <ul className={s.list}>
                    {movies.map((item) => {
                        return (
                        <li key={item._id}>
                          <Link to={`details/${item._id}`}>
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
            </div>
            </div>
        </div>;
}
 
export default MainContainer;