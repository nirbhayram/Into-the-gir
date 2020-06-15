import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection";
import CardSection from "./CardSection";
import Footer from "./Footer";

const App = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <CardSection/>
            <AppSection/>
            <Footer/>
        </div>
    );
}

export default App;
