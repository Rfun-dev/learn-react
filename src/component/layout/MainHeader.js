import { Link } from "react-router-dom";

const MainHeaderLayout = () => {
  return (
    <header>
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

export default MainHeaderLayout;
