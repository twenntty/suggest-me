import s from "./BigPoster.module.scss";

const BigPoster = ({backdrop}) => {

    return ( 
        <div className={s.big_poster} style={{ background: `linear-gradient(180deg, rgba(54, 44, 146, 0.4) 0%, rgba(18, 98, 151, 0.4) 100%)` }}>
            <img src={backdrop} alt="backdrop" className={s.backdrop} />
        </div>
     );
}
 
export default BigPoster;