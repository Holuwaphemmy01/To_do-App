import React from "react";
import "./Header.css"

const Header = () =>{
    return(
        <header className="header">
            <div className="container"> 
                <h1 className="logo" >Akinzo Todo App</h1>
                <nav className="nav">
                    <a href="/login" className="nav-link">Login</a>
                    <a href="/register" className="nav-link">Register</a>
                </nav>
            </div>
        </header>
    );
};

export default Header; 