import React from 'react';
import '../styles/Header.css';
import logo from '../images/logo.svg';

function Header() {
    return (
        <div>
            <div className="headerRow">
                <div className="col-sm-2">
                    <img src={logo} alt="logo" />
                </div>
                <div className="col-sm-8">
                    <div className="Title">
                        Pipeline BoardGames
                    </div>
                </div>
            </div>
            <div>
                <br />
            </div>
        </div>
    )
}

export default Header;
