import Form from "../component/form/Form";
import {useNavigate} from 'react-router-dom';

const NewMeetUpsPage = () => {
  const navigate = useNavigate();  

  const onPostHandler = (value) => {
    fetch("https://react-course-89d20-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json", {
        body : value,
        method : "POST",
        body : JSON.stringify(value),
        headers : {
            'Content-Type' : 'application/json'
        }
    }).then(
        navigate("/")
    )
  };

  return (
    <>
      <h1>New Meetup</h1>
      <Form onPost={onPostHandler} />
    </>
  );
};

export default NewMeetUpsPage;
