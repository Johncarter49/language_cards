import React from "react";
import reactLogo from '../../assets/react.svg';
import './header.css';

const Header = () => {
    return (
        <div className="logo-container">
            <img className="react-logo" src={reactLogo} alt='reactLogo' />
            <div className="cards-area-container">
                <h5 className="language-title">Languages</h5>
            </div>
        </div>
    )
}

export default Header

