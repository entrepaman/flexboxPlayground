import * as actionTypes from './actionTypes';

export const inputChangedAction = (attr, value, index) => {
    return {
        type: actionTypes.EDITOR_INPUT_CHANGED,
        attr: attr,
        value: value,
        index: index
    }
}

export const inputChanged = (attr, value, index) => {
    return dispatch => {
        dispatch(inputChangedAction(attr, value, index));
    }
}

export const radioChangedAction = (attr, value, styleType) => {
    return {
        type: actionTypes.EDITOR_RADIO_CHANGED,
        attr: attr,
        value: value,
        styleType: styleType
    }
}

export const radioChanged = (attr, value, styleType) => {
    return dispatch => {
        dispatch(radioChangedAction(attr, value, styleType))
    }
}


export const styleClearAction = (attr, styleType) => {
    return {
        type: actionTypes.EDITOR_STYLE_CLEAR,
        attr: attr,
        styleType: styleType
    }
}

export const styleClear = (attr, styleType) => {
    return dispatch => {
        dispatch(styleClearAction(attr, styleType));
    }
}