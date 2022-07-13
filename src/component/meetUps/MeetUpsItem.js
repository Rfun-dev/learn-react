import Card from "../ui/Card";
import Classes from "./MeetUpsItem.module.css";

const MeetUpsItem = ({ title, image, address, description }) => {
  return (
    <li className={Classes.item}>
      <Card>
        <div className={Classes.image}>
          {console.log(image)}
          <img src={image} alt={title} />
        </div>
        <div className={Classes.content}>
          <h2>{title}</h2>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={Classes.button}>
          <button>To Favorite</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpsItem;
