import { createContext,useReducer } from "react";

export const themecontext = createContext()

const initialState={darkmode:false}

const themreducer=(state,action)=>{
    switch (action.type){
        case "toggle":
            return {darkmode:!state.darkmode}
        default:
        return state;
    }
}
export const ThemeProvider=(props)=>{
    const [state,dispatch]=useReducer(themreducer,initialState);

    return(
        <themecontext.Provider value={{state,dispatch}}>
            {props.children}
        </themecontext.Provider>
    )
}