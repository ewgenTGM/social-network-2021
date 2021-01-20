import React from "react";
import classes from "./Header.module.css";
import ussr from '../../Logo.svg';

const Header = () => {
    return (
        <div>
            <header className={classes.header}>
                    <img src={ussr} alt="Logo" className={classes.logo}/>
                    <span>СССR - самая социальная сеть на React'e</span>
            </header>
        </div>
    );
};

export default Header;
