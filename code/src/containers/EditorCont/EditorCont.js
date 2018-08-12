import React from 'react';

import classes from './EditorCont.css';

import Editor from '../../components/Editor/Editor';

const editorCont = () => (
    <div className={classes.EditorCont}>
        <Editor type="parent" />
        <Editor type="child" />
    </div>
);

export default editorCont;