import {
    MODAL_OPEN,
    MODAL_CLOSE
} from './modal-action';

const initialState = {
    open: false,
    title: '',
    body: null
};

const modalReducer = (state = initialState, action) => {
    switch(action.type) {
        case MODAL_OPEN:
            const { title, body } = action.payload;
            
            return {
                ...state,
                open: true,
                title,
                body
            };
        case MODAL_CLOSE:
            return {
                ...state,
                open: false,
                title: '',
                body: null
            };
        default:
            return state;
    }
};

export default modalReducer;