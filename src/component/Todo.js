const Todo = props => {
  const handleClickButton = () => {
      
  }

  return (
    <div className="card">
      <p>{props.text}</p>
      <div className="action">
        <button className="btn" onClick={handleClickButton}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
