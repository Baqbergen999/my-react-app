import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

export default function Content() {
    const { state } = useContext(LanguageContext);

    const messages = {
        ru: "Привет мир",
        en: "Hello world",
        kz: "Сәлем әлем"
    }
    return(
        <div>
            <p>{messages[state.language]}</p>
        </div>
    )
 }