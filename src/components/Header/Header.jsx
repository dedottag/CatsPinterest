import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <button>Все котики</button>{" "}
      </Link>
      <Link to="/favorite-cats">
        <button>Любимые котики</button>
      </Link>
    </div>
  );
};

export default Header;
