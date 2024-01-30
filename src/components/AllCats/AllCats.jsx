import "./all-cats.scss";
import Spinner from "../Spinner/Spinner";
import OneCat from "./oneCat";
import FavoriteCats from "../FavoriteCats/FavoriteCats";

const AllCats = ({
  catsItem,
  addFavoriteCats,
  getCats,
  loading,
  favoriteItem,
  favoriteCats,
  removeCat,
}) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      {!favoriteItem ? (
        <div className="cats-container">
          {catsItem.map((cat) => (
            <OneCat key={cat.id} cat={cat} addFavoriteCats={addFavoriteCats} />
          ))}
          <button onClick={() => getCats()}>Загрузить еще котиков</button>
        </div>
      ) : (
        <FavoriteCats favoriteCats={favoriteCats} removeCat={removeCat} />
      )}
    </>
  );
};

export default AllCats;
