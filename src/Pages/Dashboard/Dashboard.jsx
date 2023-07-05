import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Dashboard.module.scss";
import getStatsFromApi from "../../services/getStatsFromApi";
import getNewTokens from "../../services/getNewTokens";

const Dashboard = () => {
  const [movies, setMovies] = useState(0);
  const [tv, setTv] = useState(0);
  const [sug, setSug] = useState(0);
  const [man_sug, setMan_sug] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Dashboard | Suggest.me";
    async function getStats() {
      setIsLoading(true);
      let response = await getStatsFromApi();
      if (response.status === 403) {
        if (await getNewTokens())
          response = await getStatsFromApi();
        else {
          return localStorage.clear();
        }
      }
      response = await response.json();
      setMovies(response.movies);
      setTv(response.tv);
      setSug(response.suggestions);
      setMan_sug(response.man_suggestions);
      setIsLoading(false);
    }
    getStats();
  }, []);

  return (
    <div className={s.main_container}>
      <div className={s.total_suggested}>
        <h1>Total suggested</h1>
      </div>
      <div className={s.dashboard_main_up_line}>
        <div className={s.container_movie}>
          <h3>{isLoading ? "Fetching data..." : movies}</h3>
          <h4>Movies</h4>
        </div>
        <div className={s.container_shows}>
          <h3>{isLoading ? "Fetching data..." : tv}</h3>
          <h4>TV Shows</h4>
        </div>
        <div className={s.container_suggest}>
          <h3>{isLoading ? "Fetching data..." : sug}</h3>
          <h4>Suggestions</h4>
        </div>
        <div className={s.container_manual_suggest}>
          <h3>{isLoading ? "Fetching data..." : man_sug}</h3>
          <h4>Manual Suggestions</h4>
        </div>
      </div>
      <div className={s.quick_links}>
        <h3>Quick Links</h3>
      </div>
      <div className={s.dashboard_main_down_line}>
        <div className={s.main_dashboard_suggestions}>
          <Link to={"/"}>
            <h3>Suggestions</h3>
          </Link>
        </div>
        <div className={s.main_dashboard_add}>
          <h3>Add</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
