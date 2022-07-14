import FavoriteContext from "../store/Favorite";
import MeetUpsList from "../component/meetUps/MeetUpsList";
import { useContext } from "react";

const FavoritesPage = () => {
  const favoriteContext = useContext(FavoriteContext);

  let content
  if(favoriteContext.totalFavorite === 0){
    content = <p style={{ margin : 20}}>no Data</p>
  } else {
      content = <MeetUpsList dummy={favoriteContext.favorite} />
  }

  return (
    <>
      <h1>My Favorite</h1>
      {content}
    </>
  );
};

export default FavoritesPage;
