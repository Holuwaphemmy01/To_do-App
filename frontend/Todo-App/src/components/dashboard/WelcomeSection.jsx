import React from "react";


const WelcomeSection =({ username}) =>{
    return(
        <div className="welcome-section">
            <h1>
                Hello, <span className="username">{username}</span>, Start Planning Today
            </h1>
        </div>
    );
};

export default WelcomeSection;