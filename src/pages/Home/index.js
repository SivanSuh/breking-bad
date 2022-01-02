import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacter } from "../../redux/CharacterSlice";
import { Link } from "react-router-dom";
import "./style.css";
const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="container">
        {characters.map((charac) => (
          <div className="character" key={charac.char_id}>
            <Link className="Link" to={`/char/${charac.char_id}`}>
              <img alt={charac.name} className="img" src={charac.img} />
              <h2 className="name">{charac.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
