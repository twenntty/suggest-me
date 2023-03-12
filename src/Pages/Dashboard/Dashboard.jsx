import { useEffect, useState } from "react";
import s from "./Dashboard.module.scss";


const Dashboard = () => {
    const [movies, setMovies] = useState(0);
    const [tv, setTv] = useState(0);
    const [sug, setSug] = useState(0);
    const [man_sug, setMan_sug] = useState(0);


    useEffect(() => {
        document.title = 'Dashboard | Suggest.me';
        async function getStats(){
            let result = await fetch("https://practice-api-vlasenko-bohdan.onrender.com/user/stats", {
            headers: {
              'Authorization' : `Bearer ${localStorage.accessToken}`
            }
          });
          console.log(result);
          result = await result.json();
          setMovies(result.movies);
          setTv(result.tv);
          setSug(result.suggestions);
          setMan_sug(result.man_suggestions);
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
                    <h3>{movies}</h3>
                    <h4>Movies</h4>
                </div>
                <div className={s.container_shows}>
                    <h3>{tv}</h3>
                    <h4>TV Shows</h4>
                </div>
                <div className={s.container_suggest}>
                    <h3>{sug}</h3>
                    <h4>Suggestions</h4>
                </div>
                <div className={s.container_manual_suggest}>
                    <h3>{man_sug}</h3>
                    <h4>Manual Suggestions</h4>
                </div>
            </div>
            <div className={s.quick_links}>
                <h3>Quick Links</h3>
            </div>
            <div className={s.dashboard_main_down_line}>
                <div className={s.main_dashboard_suggestions}>
                    <h3>Suggestions</h3>
                </div>
                <div className={s.main_dashboard_add}>
                    <h3>Add</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;