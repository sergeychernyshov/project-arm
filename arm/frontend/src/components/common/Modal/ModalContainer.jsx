import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Modal from './Modal';

import { modalClose } from './modal-action';

const ModalContainer = ({ open, title, body, modalClose }) => {
    return open &&
        <Modal
            title={title}
            body={body}
            modalClose={modalClose}
        />
}

const mapStateToProps = ({ modal: { open, title, body } }) => {
    return {
        open,
        title,
        body
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        modalClose
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);