import {createContext, useReducer} from "react";

export const ThemeCambio = createContext();

const INITIAL_STATE= {darkMode: false};
const themeReducer = (state, action) =>{
    switch(action.type){
        case"NOCHE":
        return{darkMode: !state.darkMode};
        default:
            return state;
    }
};
export const ThemeProvider = (props)=>{
    const[state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
    return(
        <ThemeCambio.Provider value={{state, dispatch}}>
        {props.children}
        </ThemeCambio.Provider>
    );
};