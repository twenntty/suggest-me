import s from "./NameFilm.module.scss";

const NameFilm = ({title, category}) => {
    
    return ( 
        <div className={s.name_film}>
                        <span className={s.category}>{category}</span>
                        <h1 className={s.film}>{title}</h1>
        </div>
     );
}
 
export default NameFilm;