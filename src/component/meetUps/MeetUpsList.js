import MeetUpsItem from "./MeetUpsItem";
import Classes from "./MeetUpsList.module.css";

const MeetUpsList = ({ dummy }) => {
  return (
    <>
      <h1>All Meetups</h1>
      <ul className={Classes.list}>
        {dummy.map((item) => (
          <MeetUpsItem key={item.id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default MeetUpsList;
