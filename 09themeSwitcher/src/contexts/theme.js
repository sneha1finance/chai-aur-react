import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme :()=>{},
    lightTheme :()=>{}

})

export const ThemeProvider = ThemeContext.Provider

//custom hooks useTheme
export default function useTheme()
{
    return useContext(ThemeContext)
}