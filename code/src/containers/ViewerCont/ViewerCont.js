import React from 'react';

import classes from './ViewerCont.css';

const viewerCont = () => (
    <div className={classes.ViewerCont}>
        <div className={classes.Parent}>
            {[1, 2, 3, 4, 5, 6].map(i => {
                return <div className={classes.Child}><p>div {i}</p></div>
            })}
        </div>
    </div>
);

export default viewerCont;