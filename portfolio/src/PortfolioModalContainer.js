import React from "react";
import PortfolioModel from "./PortfolioModel";
import cabin from "./assets/img/portfolio/cabin.png"
import submarine from "./assets/img/portfolio/submarine.png"
import safe from "./assets/img/portfolio/safe.png"
import game from "./assets/img/portfolio/game.png"
import circus from "./assets/img/portfolio/circus.png"
import cake from "./assets/img/portfolio/cake.png"

const PortfolioModalContainer = () => {
    return (
        <div>
            <PortfolioModel PortfolioId="portfolioModal1" image={cabin} title="Cabin"/>
            <PortfolioModel PortfolioId="portfolioModal2" image={cake} title="Cake"/>
            <PortfolioModel PortfolioId="portfolioModal3" image={circus} title="Circus"/>
            <PortfolioModel PortfolioId="portfolioModal4" image={game} title="Game"/>
            <PortfolioModel PortfolioId="portfolioModal5" image={safe} title="Safe"/>
            <PortfolioModel PortfolioId="portfolioModal6" image={submarine} title="Submarine"/>
        </div>
    )

}

export default PortfolioModalContainer