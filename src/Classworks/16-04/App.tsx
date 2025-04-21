import { useReducer } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Content from "./Content";
import LanguageContext from "./LanguageContext";

let initialState = {
    languages:'ru'
}
function reducer(state:any, action:any) {
    switch (action.type) {
        case 'til_austyr':
            return{
                language: action.payload
            }
            default:
                return state
}
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <LanguageContext.Provider value={{state, dispatch}}>
            <div className="App">
                <h1>Language Switcher</h1>
                <LanguageSwitcher />
                <Content />
            </div>
        </LanguageContext.Provider>
    )
}