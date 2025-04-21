import {useContext} from "react";
import LanguageContext from "./LanguageContext";

export default function LanguageSwitcher() {
    const { dispatch} = useContext(LanguageContext);

    const switchLanguage = (event:any) => {
        dispatch({ type: 'til_austyr', payload: event.target.value });
    };


return(
    <div>
        <select onChange={switchLanguage}>
            <option value="ru">Russian</option>
            <option value="en">English</option>
            <option value="kz">Kazakh</option>
        </select>
    </div>
)
}