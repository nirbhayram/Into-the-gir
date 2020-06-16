import React from "react"
import NavigationBar from "./NavigationBar";
import Masterhead from "./Masterhead";
import Portfolio from "./Portfolio";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";


const App = () => {
    return (
        <div>
            <NavigationBar/>
            <Masterhead/>
            <Portfolio/>
            <AboutSection/>
            <ContactSection/>
        </div>
    )
}

export default App
