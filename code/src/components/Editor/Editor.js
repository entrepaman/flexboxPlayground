import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Editor.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';

import * as actions from '../../store/actions/editor';

class Editor extends Component {
    state = {
        parentEditableStyles: [
            {
                'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
                'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
                'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
                'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
                'align-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
            }
        ],
        childEditableStyles: [
            {
                'order': [],
                'flex-grow': [],
                'flex-shrink': [],
                'align-self': ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']
            }
        ],
        styles: []
    }

    componentDidMount() {
        let styles = [];
        if(this.props.type === 'parent') {
            styles = this.state.parentEditableStyles
        } else {
            styles = this.state.childEditableStyles
        }
        this.setState(prevState => ({
            styles: styles
        }));
    }

    radioValueChangedHandler = (event, attr) => {
        this.props.onRadioChanged(attr, event.target.value, this.props.type);
    }

    inputValueChangedHandler = (event, attr, index) => {
        const value = event.target.value;
        if(value >= 0) {
            this.props.onInputChanged(attr, event.target.value, index);
        } else {
            this.props.onInputChanged(attr, 0, index);
        }
    }

    clearButtonClickedHandler = (event, attr) => {
        this.props.onStyleClear(attr, this.props.type);
    }

    render() {
        return (
            <div className={classes.Editor}>
                <p className={classes[this.props.type]}>{this.props.type + ' styles'}</p>
                <div className={classes.EditorPane}>
                    {
                        this.props.type === 'parent'
                        ? <p>.container <span>{'{'}</span></p>
                        : <p>.child <span>{'{'}</span></p>
                    }
                    <div className={classes.Code}>
                        {
                            this.props.type === 'parent'
                            ? (
                                <div className={classes.Row}>
                                    <div className={classes.attr}><p>display:</p></div>
                                    <div className={classes.val}><p>flex;</p></div>
                                </div>
                            )
                            : (
                                <Aux>
                                    <div className={classes.Row}>
                                        <div className={classes.attr}><p>margin:</p></div>
                                        <div className={classes.val}><p>7px;</p></div>
                                    </div>
                                    <div className={classes.Row}>
                                        <div className={classes.attr}><p>padding:</p></div>
                                        <div className={classes.val}><p>4px 9px;</p></div>
                                    </div>
                                    <div className={classes.Row}>
                                        <div className={classes.attr}><p>width:</p></div>
                                        <div className={classes.val}><p>24%;</p></div>
                                    </div>
                                </Aux>
                            )
                        }
                        {
                            this.state.styles.map(row => {
                                return Object.keys(row).map(attr => {
                                    return (
                                        <div key={attr} className={classes.Row}>
                                            <div className={classes.attr}><p>{attr}:</p></div>
                                            <div className={classes.val}>
                                                {
                                                    row[attr].length !== 0 
                                                    ? (
                                                        row[attr].map((val, index) => {
                                                            return (
                                                                <Aux key={attr + '-' + val}>
                                                                    <div className={classes.RadioCont}>
                                                                        <input 
                                                                            onChange={(event) => this.radioValueChangedHandler(event, attr)} 
                                                                            type="radio" 
                                                                            id={attr + '-' + val} 
                                                                            name={attr} 
                                                                            value={val}
                                                                            checked={this.props.type === 'parent' ? (this.props.parentSelectedStyles[attr] !== '' && this.props.parentSelectedStyles[attr] === val ? true: false) : (this.props.childSelectedStyles[attr] !== '' && this.props.childSelectedStyles[attr] === val ? true: false)}
                                                                        />
                                                                        <label htmlFor={attr + '-' + val}>{val};</label>

                                                                        <div className={classes.Check}><div className={classes.Inside}></div></div>
                                                                    </div>
                                                                    {
                                                                        index === row[attr].length-1
                                                                        ? <button onClick={(event) => this.clearButtonClickedHandler(event, attr)} className={classes.ClearButton}>clear</button>
                                                                        : null
                                                                    }
                                                                </Aux>
                                                            );
                                                        })
                                                    )
                                                    : (
                                                        [0, 1, 2, 3, 4, 5].map(i => {
                                                            return <input key={'inp-' + attr + '-' + i} type="number" onChange={(event) => this.inputValueChangedHandler(event, attr, i)} value={this.props.childSelectedStyles[attr][i]} />
                                                        })
                                                    )
                                                }
                                            </div>
                                        </div>
                                    );
                                });
                            })
                        }
                    </div>
                    <p>{'}'}</p>
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

const mapDispatchToProps = dispatch => {
    return {
        onInputChanged: (attr, value, index) => dispatch(actions.inputChanged(attr, value, index)),
        onRadioChanged: (attr, value, styleType) => dispatch(actions.radioChanged(attr, value, styleType)),
        onStyleClear: (attr, styleType) => dispatch(actions.styleClear(attr, styleType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
