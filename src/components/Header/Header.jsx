import React, {useEffect} from "react";
import classes from "./Header.module.css";
import ussr from '../../Logo.svg';
import axios from "axios";

const Header = (props) => {
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0//auth/me', {
            withCredentials: true
        })
            .then(response => {
                props.setMe(response.data.data.id, response.data.data.login, response.data.data.email);
            });
    }, []);

    return (
        <div>
            <header className={classes.header}>
                <img src={ussr} alt="Logo" className={classes.logo}/>
                <span>СССR - самая социальная сеть на React'e</span>
            </header>
            <div className={classes.sign_in_info}>
                <span>id: {props.me.id}, </span>
                <span>login: {props.me.login}, </span>
                <span>email: {props.me.email}.</span>
            </div>
        </div>
    );

}
export default Header;
