import React from "react"
import NavigationBar from "./NavigationBar";
import Masterhead from "./Masterhead";
import Portfolio from "./Portfolio";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Copyrights from "./Copyrights";
import PortfolioModalContainer from "./PortfolioModalContainer";


const App = () => {
    return (
        <div>
            <NavigationBar/>
            <Masterhead/>
            <Portfolio/>
            <AboutSection/>
            <ContactSection/>
            <Footer/>
            <Copyrights/>
            <PortfolioModalContainer/>
        </div>
    )
}

export default App
