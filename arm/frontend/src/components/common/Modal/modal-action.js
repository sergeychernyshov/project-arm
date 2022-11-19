const MODAL_OPEN = 'MODAL_OPEN';
const MODAL_CLOSE = 'MODAL_CLOSE';

const modalOpen = (payload) => {
    return {
        type: MODAL_OPEN,
        payload
    };
};

const modalClose = () => {
    return {
        type: MODAL_CLOSE
    };
};

export {
    MODAL_OPEN,
    MODAL_CLOSE,
    modalOpen,
    modalClose
};