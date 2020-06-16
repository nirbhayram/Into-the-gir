import React from "react";
import userImage from "./assets/img/avataaars.svg"

const Masterhead = () => {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src={userImage}
                     alt=""/>
                <h1 className="masthead-heading text-uppercase mb-0">Nirbhay Ram</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Programmer - Web Developer -
                    Mobile Developer</p>
            </div>
        </header>
    );
}

export default Masterhead
