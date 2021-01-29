import React from 'react';
import styles from "./Spinner.module.css";
import spinner_image from "./spinner.gif";

const Spinner = () => {
    return (
        <img
            className={styles.spinner}
            src={spinner_image}
            alt=''/>
    );
}

export default Spinner;