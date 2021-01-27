import React, {useEffect} from "react";
import classes from "./Header.module.css";
import ussr from '../../Logo.svg';
import {getMe} from "../../DAL/api";

const Header = (props) => {
    useEffect(() => {
        getMe().then(response => {
            props.setMe(response.data.data.id, response.data.data.login, response.data.data.email);
        });
    }, []);

    return (
        <div>
            <header className={classes.header}>
                <img
                    src={ussr}
                    alt="Logo"
                    className={classes.logo}/>
                <div className={classes.brand}>СССR - самая социальная сеть на React'e</div>
                <div className={classes.sign_in_info}>
                    <span>---id: {props.me.id}, </span>
                    <span>login: {props.me.login}, </span>
                    <span>email: {props.me.email}---.</span>
                </div>
            </header>

        </div>
    );

}
export default Header;
