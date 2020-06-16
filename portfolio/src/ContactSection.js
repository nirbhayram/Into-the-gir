import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection