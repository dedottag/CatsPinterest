// import "./favorite-cats.scss";
import "../AllCats/all-cats.scss";
import LikeIcon from "../icons/likeIcon.svg";

const FavoriteCats = ({ favoriteCats, removeCat }) => {
  return (
    <div className="cats-container">
      {favoriteCats.map((cat) => (
        <div className="one-cat" key={cat.id} onClick={() => removeCat(cat)}>
          <img className="cat-img" src={cat.url} alt="котик" />
          <img className="like-icon" src={LikeIcon} alt="котик" />
        </div>
      ))}
    </div>
  );
};

export default FavoriteCats;
