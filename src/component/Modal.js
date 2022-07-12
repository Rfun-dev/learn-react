import React from "react";

const Modal = (props) => {

    const onCancel = () => {
        props.onCancel()
    }

    const onConfirm = () => {
       props.onConfirm()
    }

    return(
        <div className="modal">
            <p>Are you sure ?</p>
            <button className="btn" onClick={onCancel}>Cancel</button>
            <button className="btn btn--alt" onClick={onConfirm}>Delete</button>
        </div>
    )
} 

export default Modal;