import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.deleteSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">선택받은 옵션</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button 
        onClick={props.deleteSelectedOption}
        className="button"
        >Okay</button>
    </Modal>
)

export default OptionModal;

// Create a new event handle in IndecisionApp that clears selectedOption state
// pass that into OptionModal
// Call it on button click