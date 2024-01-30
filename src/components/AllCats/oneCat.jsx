import LikeIkon from "../icons/likeIcon.svg";
import NotLikeIcon from "../icons/notLikeIcon.svg";
import { useState } from "react";

import "./all-cats.scss";

const OneCat = ({ cat, addFavoriteCats }) => {
  const [like, setLike] = useState(false);
  return (
    <div
      className="one-cat"
      key={cat.id}
      onClick={() => {
        addFavoriteCats(cat);
        setLike((like) => !like);
      }}
    >
      <img className="cat-img" src={cat.url} alt="cat" />
      <img className="like-icon" src={like ? LikeIkon : NotLikeIcon} alt="" />
    </div>
  );
};

export default OneCat;
