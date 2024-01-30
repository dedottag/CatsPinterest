import "./all-cats.scss";
import Spinner from "../Spinner/Spinner";
import OneCat from "./oneCat";

const AllCats = ({ catsItem, addFavoriteCats, getCats, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="cats-container">
      {catsItem.map((cat) => (
        <OneCat key={cat.id} cat={cat} addFavoriteCats={addFavoriteCats} />
      ))}
      <button onClick={() => getCats()}>Загрузить еще котиков</button>
    </div>
  );
};

export default AllCats;
