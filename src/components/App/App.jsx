import "./app.scss";

import AllCats from "../AllCats/AllCats";
import FavoriteCats from "../FavoriteCats/FavoriteCats";
import Header from "../Header/Header";

import { Route, Routes, HashRouter } from "react-router-dom";

import { useEffect, useState } from "react";

// const ApiKey =
//   "live_uRgunvfWTKbpmWPt3AhKdpUQB9NHeoVz4bQVjRkbjd2NXOFMpb8uoPtUesYPI7AW";
// const API =
//   "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&?api_key=";

const App = () => {
  const [catsItem, setCatsItem] = useState([]);
  const [favoriteCats, setFavoriteCats] = useState([
    { id: "5vm", url: "https://cdn2.thecatapi.com/images/5vm.jpg" },
  ]);
  const [loading, setLoading] = useState(true);
  console.log(catsItem);

  async function getCats() {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_uRgunvfWTKbpmWPt3AhKdpUQB9NHeoVz4bQVjRkbjd2NXOFMpb8uoPtUesYPI7AW"
      );
      const responseJson = await response.json();
      if (responseJson) {
        const newCats = [...catsItem, ...responseJson];
        setCatsItem(newCats);
        setLoading(false);
      }
    } catch {
      console.log("что-то пошло не так");
    }
  }
  useEffect(() => {
    getCats();
  }, []);

  const saveToLocalStorage = (cat) => {
    localStorage.setItem("cats-pinterest", JSON.stringify(cat));
  };

  const addFavoriteCats = (cat) => {
    const newFavoriteList = [...favoriteCats, cat];
    const result = [];
    newFavoriteList.forEach((datum) => {
      if (!result.find((item) => item.id === datum.id)) {
        result.push(datum);
      }
    });
    setFavoriteCats(result);
    saveToLocalStorage(result);
  };

  useEffect(() => {
    const favoriteCats = JSON.parse(localStorage.getItem("cats-pinterest"));
    setFavoriteCats((cat) => [...cat, ...favoriteCats]);
  }, []);

  const removeCat = (catDel) => {
    const newRated = favoriteCats.filter((cat) => {
      return cat.id !== catDel.id;
    });
    setFavoriteCats(newRated);
    saveToLocalStorage(newRated);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <AllCats
              catsItem={catsItem}
              addFavoriteCats={addFavoriteCats}
              getCats={getCats}
              loading={loading}
              favoriteCats={favoriteCats}
              removeCat={removeCat}
            />
          }
        />
        <Route
          path="/favorite-cats"
          element={
            <FavoriteCats favoriteCats={favoriteCats} removeCat={removeCat} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
