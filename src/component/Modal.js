import React from "react";

const Modal = (props) => {
    return(
        <div className="modal">
            <p>Are you sure ?</p>
            <button className="btn">Cancel</button>
            <button className="btn btn--alt">Delete</button>
        </div>
    )
} 

export default Modal;