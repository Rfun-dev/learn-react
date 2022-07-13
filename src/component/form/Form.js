import classes from "./Form.module.css";
import { useRef } from "react";

const Form = (props) => {
  const inputTitle = useRef();
  const inputImage = useRef();
  const inputAddress = useRef();
  const inputDescription = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const titleValue = inputTitle.current.value;
    const imageValue = inputImage.current.value;
    const addressValue = inputAddress.current.value;
    const descriptionValue = inputDescription.current.value;

    const value = {
        title : titleValue,
        image : imageValue,
        address : addressValue,
        description : descriptionValue,
    }

    props.onPost(value)
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes.content}>
        <label htmlFor="title">Title</label>
        <input id="title" ref={inputTitle} />
      </div>
      <div className={classes.content}>
        <label htmlFor="image">Image</label>
        <input id="image" ref={inputImage} />
      </div>
      <div className={classes.content}>
        <label htmlFor="address">address</label>
        <input id="address" ref={inputAddress} />
      </div>
      <div className={classes.content}>
        <label htmlFor="description">Description</label>
        <textarea rows="5" id="description" ref={inputDescription} />
      </div>
      <div className={classes.button}>
        <button type="submit">Add Meetup</button>
      </div>
    </form>
  );
};

export default Form;
