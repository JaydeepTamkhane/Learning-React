import React from "react";
import { createContext, useContext } from "react";


// created global variable
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});


// created a wrapper insider which the variables
// can be used
export const ThemeProvider=ThemeContext.Provider


// created a fuction to return the global variables
export default function useTheme(){
    return useContext(ThemeContext)
}


