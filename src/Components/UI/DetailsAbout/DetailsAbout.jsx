import s from "./DetailsAbout.module.scss";
import Rate from "../../UI/Rate/Rate"

const DetailsAbout = ({ isRate, isRunTime, label, value }) => {

    if (!value) return null;

    return ( 
        <div className={s.detail}>
            <span>{label}</span>
            {(() => {
                if(isRate) return <Rate rate={value} /> ;
                if(isRunTime) return <span>{value} min</span>
                else return <span>{value}</span>
                })()}
         </div>
     );
}
 
export default DetailsAbout;