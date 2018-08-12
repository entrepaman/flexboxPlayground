import React from 'react';

import classes from './Menubar.css';

import CSS3Logo from '../../assets/css3-logo.png';

const menubar = () => (
    <div className={classes.Menubar}>
        <img src={CSS3Logo} alt="CSS3 Logo"/>
        <p>Flexbox Playground</p>
    </div>
);

export default menubar;