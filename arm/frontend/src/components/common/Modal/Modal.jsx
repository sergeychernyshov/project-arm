import React from 'react';
import { Link } from 'react-router-dom';

import './modal.css';

const Modal = ({ title, body, modalClose }) => {
    return (
        <div className="modal__overlay">
            <div className="modal">
                <div className="modal__header">
                    <div className="modal__title">
                        {title}
                    </div>
                    <div className="modal__close">
                        <Link onClick={modalClose} to='#' >Закрыть</Link>
                    </div>
                </div>
                <div className="modal__body">
                    {body}
                </div>
            </div>
        </div>
    );
};

export default Modal;