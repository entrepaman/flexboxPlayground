import React from 'react';

import classes from './Layout.css';

import Menubar from '../../components/Menubar/Menubar';
import EditorCont from '../../containers/EditorCont/EditorCont';
import ViewerCont from '../../containers/ViewerCont/ViewerCont';

const layout = (props) => (
    <div className={classes.Layout}>
        <Menubar />
        <main className={classes.Content}>
            <EditorCont />
            <ViewerCont />
            {props.children}
        </main>
    </div>
);

export default layout;