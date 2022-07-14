import Card from "../ui/Card";
import Classes from "./MeetUpsItem.module.css";
import { useContext } from "react";
import FavoriteContext from "../../store/Favorite";

const MeetUpsItem = ({ id, title, image, address, description }) => {
  const favoriteContext = useContext(FavoriteContext);
  const itemIsFavorite = favoriteContext.itemIsFavorite(id);

  const toggleFavoriteStatusHandler = () => {
  console.log(itemIsFavorite);
    if (itemIsFavorite) {
      favoriteContext.removeFavorite(id);
    } else {
      favoriteContext.addFavorite(
        {
          id : id,
          title : title,
          image : image,
          address : address,
          description : description
        }
      );
    }
  };

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
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? "Remove From Favorite" : "To Favorite"}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpsItem;
