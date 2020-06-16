import React from "react";
import Card from "./Card";
import cake from "./assets/img/portfolio/cake.png"
import cabin from "./assets/img/portfolio/cabin.png"
import circus from "./assets/img/portfolio/circus.png"
import game from "./assets/img/portfolio/game.png"
import safe from "./assets/img/portfolio/safe.png"
import submarine from "./assets/img/portfolio/submarine.png"

const Portfolio = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <Card image={cabin}/>
                    <Card image={cake}/>
                    <Card image={circus}/>
                    <Card image={game}/>
                    <Card image={safe}/>
                    <Card image={submarine}/>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;