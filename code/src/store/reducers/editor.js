import cloneDeep from 'lodash.clonedeep';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    parentSelectedStyles: {
        'flex-direction': '',
        'flex-wrap': '',
        'justify-content': '',
        'align-items': '',
        'align-content': ''
    },
    childSelectedStyles: {
        'order': [0, 0, 0, 0, 0, 0],
        'flex-grow': [0, 0, 0, 0, 0, 0],
        'flex-shrink': [1, 1, 1, 1, 1, 1],
        'align-self': 'auto'
    }
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.EDITOR_INPUT_CHANGED:
            let newChildSelectedStyles = cloneDeep(state.childSelectedStyles);
            newChildSelectedStyles[action.attr][action.index] = action.value;
            return updateObject(state, {childSelectedStyles: newChildSelectedStyles});
        case actionTypes.EDITOR_RADIO_CHANGED:
            let newSelectedStyles = {};
            if(action.styleType === 'parent') {
                newSelectedStyles = cloneDeep(state.parentSelectedStyles);
                newSelectedStyles[action.attr] = action.value;
                return updateObject(state, {parentSelectedStyles: newSelectedStyles});
            } else {
                newSelectedStyles = cloneDeep(state.childSelectedStyles);
                newSelectedStyles[action.attr] = action.value;
                return updateObject(state, {childSelectedStyles: newSelectedStyles});
            }
        case actionTypes.EDITOR_STYLE_CLEAR:
            let selectedStyles = {};
            if(action.styleType === 'parent') {
                selectedStyles = cloneDeep(state.parentSelectedStyles);
                selectedStyles[action.attr] = '';
                return updateObject(state, {parentSelectedStyles: selectedStyles});
            } else {
                selectedStyles = cloneDeep(state.childSelectedStyles);
                selectedStyles[action.attr] = 'auto';
                return updateObject(state, {childSelectedStyles: selectedStyles});
            }
        default:
            return state;
    }
};

export default reducers;