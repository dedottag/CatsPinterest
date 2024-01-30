import "./header.scss";
import { Link } from "react-router-dom";

const Header = ({ setFavoriteItem }) => {
  return (
    <div className="header-container">
      <Link to="/">
        <button onClick={() => setFavoriteItem(false)}>Все котики</button>{" "}
      </Link>
      <Link to="/favorite-cats">
        <button onClick={() => setFavoriteItem(true)}>Любимые котики</button>
      </Link>
    </div>
  );
};

export default Header;
