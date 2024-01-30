import "./header.scss";

const Header = ({ setFavoriteItem }) => {
  return (
    <div className="header-container">
      <button onClick={() => setFavoriteItem(false)}>Все котики</button>
      <button onClick={() => setFavoriteItem(true)}>Любимые котики</button>
    </div>
  );
};

export default Header;
