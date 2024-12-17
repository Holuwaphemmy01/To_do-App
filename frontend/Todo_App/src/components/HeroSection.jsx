import React from "react";
import "./HeroSection.css";
import logo from "./Preview.png";

const HeroSection =()=>{
    return(
        <section>
            <div>
                <h1 className="hero-title">Organize. Prioritize. Achieve.</h1>
                <p className="hero-subtext">
                    Stay on top of your task with Akinzo Todo App. Simple, powerful, and 
                    tailored for your productivity.
                </p>
                <a href="/register" className="hero-btn">
                    Get Started
                </a>
            </div>
            <div className="hero-image">
                <img src={logo} alt="Akinzo Todo Logo"/>
            </div>
        </section>
    );
};

export default HeroSection;