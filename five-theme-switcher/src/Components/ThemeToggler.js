import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext"

const ThemeToggler = () => {
    const [themeMode, SetThemeMode] = useContext(ThemeContext);

    return (
        <div onClick={
            ()=>{SetThemeMode(themeMode==="light"?"dark":"light")}
        }>
            <p>{themeMode==="light"?"Turn off lights":"Turn on the lights"}</p>
        </div>
    )
}

export default ThemeToggler;