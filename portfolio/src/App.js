import React from "react"
import NavigationBar from "./NavigationBar";
import Masterhead from "./Masterhead";
import Portfolio from "./Portfolio";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";


const App = () => {
    return (
        <div>
            <NavigationBar/>
            <Masterhead/>
            <Portfolio/>
            <AboutSection/>
            <ContactSection/>
            <Footer/>
        </div>
    )
}

export default App
