import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = props => {
  const [isModalOpen,setIsModalOpen] = useState(false)

  const handleClickButton = () => {
      setIsModalOpen(true)
  }

  const onCancelHandler = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="card">f
      <p>{props.text}</p>
      <div className="action">
        <button className="btn" onClick={handleClickButton}>Delete</button>
        {isModalOpen && <Modal onCancel={onCancelHandler} onConfirm={onCancelHandler}/>}
        {isModalOpen && <Backdrop onCancel={onCancelHandler}/>}
      </div>
    </div>
  );
};

export default Todo;
