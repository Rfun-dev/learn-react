import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = props => {
  const [isModalOpen,setIsModalOpen] = useState(false)

  const handleClickButton = () => {
      setIsModalOpen(true)
  }

  return (
    <div className="card">
      <p>{props.text}</p>
      <div className="action">
        <button className="btn" onClick={handleClickButton}>Delete</button>
        {isModalOpen && <Modal/>}
        {isModalOpen && <Backdrop/>}
      </div>
    </div>
  );
};

export default Todo;
