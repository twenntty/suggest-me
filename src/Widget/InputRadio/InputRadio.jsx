import s from "../InputRadio/InputRadio.module.scss";

const inputCategory = ["Any", "Action", "Horror", "Drama", "Comedy"];

const InputRadio = ({onChange, value}) => {


    return (
        <div className={s.input}>
            <div className={s.content}>
                {inputCategory.map((element) => {
                    return (
                        <div className={s.input_container} key={element}>
                        <input checked={value === element} onChange={onChange} name="category" id={element} type="radio"/>
                        <label htmlFor={element}>{element}</label>
                        </div>
            );
            })}
            </div>
        </div>
    )
}
 
export default InputRadio;