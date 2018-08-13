import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startCase } from 'lodash';

import classes from './ViewerCont.css';

class ViewerCont extends Component {
    render() {
        let parentStyles = {};
        const parentStylesKeys = Object.keys(this.props.parentSelectedStyles);
        for(let i = 0; i < parentStylesKeys.length; i++) {
            const attr = parentStylesKeys[i];
            if(attr !== '') {
                parentStyles[attr.split('-')[0] + startCase(attr.split('-')[1])] = this.props.parentSelectedStyles[attr];
            }   
        }

        let childStyles = [];
        const childStylesKeys = Object.keys(this.props.childSelectedStyles);
        for (let i = 0; i < 6; i++) {
            for(let j = 0; j < childStylesKeys.length; j++) {
                const attr = childStylesKeys[j];
                if(attr !== '') {
                    if(typeof childStyles[i] === 'undefined') {
                        childStyles[i] = {}
                    }

                    let style = '';
                    if(attr !== 'align-self') {
                        style = parseFloat(this.props.childSelectedStyles[attr][i]);
                    } else {
                        style = this.props.childSelectedStyles[attr];
                    }
                    childStyles[i][attr.split('-')[0] + startCase(attr.split('-')[1])] = style;
                }   
            }
        }

        return (
            <div className={classes.ViewerCont}>
                <div className={classes.Parent} style={parentStyles}>
                    {[0, 1, 2, 3, 4, 5].map(i => {
                        return <div key={i} className={classes.Child} style={childStyles[i]}><p>div {i}</p></div>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        parentSelectedStyles: state.editor.parentSelectedStyles,
        childSelectedStyles: state.editor.childSelectedStyles
    }
}

export default connect(mapStateToProps)(ViewerCont);