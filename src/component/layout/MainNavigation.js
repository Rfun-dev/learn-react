import { Link } from "react-router-dom";
import Classes from "./MainNavigation.module.css";
import FavoriteContext from "../../store/Favorite";
import { useContext } from "react";

const MainNavigation = () => {

  const favoriteContext = useContext(FavoriteContext);

  const countFavorite = favoriteContext.totalFavorite;

  return (
    <header className={Classes.header}>
      <h1>React Meetups</h1>
      <ul>
        <li>
          <Link to="/">All Meet Up</Link>
        </li>
        <li>
          <Link to="/new-meetups">New Meet Up</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite <span>{countFavorite}</span></Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
