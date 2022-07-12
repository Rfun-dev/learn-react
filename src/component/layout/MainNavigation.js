import { Link } from "react-router-dom";
import Classes from "./MainNavigation.module.css";

const MainNavigation = () => {
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
          <Link to="/favorite">Favorite</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
