import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <>
            <nav className={styles.nav}>
                <a className={styles.navLink} href="/#">Главная</a>
                <a className={styles.navLink} href="/#">Раздел 1</a>
                <a className={styles.navLink} href="/#">Раздел 2</a>
                <a className={styles.navLink} href="/#">Контакты</a>
            </nav>
        </>
    );
}

export default Navbar;