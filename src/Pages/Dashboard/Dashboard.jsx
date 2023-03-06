import s from "./Dashboard.module.scss";

const Dashboard = () => {
    return ( 
        <div className={s.main_container}>
            <div className={s.total_suggested}>
                <h1>Total suggested</h1>
            </div>
            <div className={s.dashboard_main_up_line}>
                <div className={s.container_movie}>
                    <h3>93</h3>
                    <h4>Movies</h4>
                </div>
                <div className={s.container_shows}>
                    <h3>26</h3>
                    <h4>TV Shows</h4>
                </div>
                <div className={s.container_suggest}>
                    <h3>7</h3>
                    <h4>Suggestions</h4>
                </div>
                <div className={s.container_manual_suggest}>
                    <h3>3</h3>
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