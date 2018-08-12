import React from 'react';

import classes from './Editor.css';

const editor = (props) => (
    <div className={classes.Editor}>
        <p className={classes[props.type]}>{props.type}</p>
        <div className={classes.EditorPane}>
            <p>.container <span>{'{'}</span></p>
            <div className={classes.Code}>
                <div>
                    <div className={classes.attr}><p>display:</p></div>
                    <div className={classes.val}><p>flex;</p></div>
                </div>
                <div>
                    <div className={classes.attr}><p>flex-direction:</p></div>
                    <div className={classes.val}>
                        <p>
                            <input type="radio" id="row" name="flex-dir" />
                            <label for="row">row;</label>

                            <div className={classes.Check}><div className={classes.Inside}></div></div>
                        </p>
                        <p>
                            <input type="radio" id="row-reverse" name="flex-dir" />
                            <label for="row-reverse">row-reverse;</label>

                            <div className={classes.Check}><div className={classes.Inside}></div></div>
                        </p>
                        <p>
                            <input type="radio" id="column" name="flex-dir" />
                            <label for="column">column;</label>

                            <div className={classes.Check}><div className={classes.Inside}></div></div>
                        </p>
                        <p>
                            <input type="radio" id="column-reverse" name="flex-dir" />
                            <label for="column-reverse">column-reverse;</label>

                            <div className={classes.Check}><div className={classes.Inside}></div></div>
                        </p>
                    </div>
                </div>
            </div>
            <p>{'}'}</p>
        </div>
    </div>
);

export default editor;