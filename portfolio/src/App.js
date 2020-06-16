import React from "react"
import NavigationBar from "./NavigationBar";
import Masterhead from "./Masterhead";
import Portfolio from "./Portfolio";
import AboutSection from "./AboutSection";


const App = () => {
    return (
        <div>
            <NavigationBar/>
            <Masterhead/>
            <Portfolio/>
            <AboutSection/>
        </div>
    )
}

export default App
