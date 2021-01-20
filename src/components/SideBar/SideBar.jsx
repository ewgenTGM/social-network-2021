import React from "react";
import styles from "./SideBar.module.css";
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <div className={styles.sidebar_nav}>
                <div className={styles.sidebar_nav_item}>
                    <NavLink to="/userProfile"
                             activeClassName={styles.sidebar_link_active}>
                        Профиль
                    </NavLink>
                </div>
                <div className={styles.sidebar_nav_item}>
                    <NavLink to="/dialogs"
                             activeClassName={styles.sidebar_link_active}>
                        Беседы
                    </NavLink>
                </div>
                <div className={styles.sidebar_nav_item}>
                    <NavLink to="/news"
                             activeClassName={styles.sidebar_link_active}>
                        Новости
                    </NavLink>
                </div>
                <div className={styles.sidebar_nav_item}>
                    <NavLink to="/music"
                             activeClassName={styles.sidebar_link_active}>
                        Музончик
                    </NavLink>
                </div>
                <div className={styles.sidebar_nav_item}>
                    <NavLink to="/settings"
                        activeClassName={styles.sidebar_link_active}>
                        Настройки
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
