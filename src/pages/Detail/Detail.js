import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./detail.css";
const Detail = () => {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);
  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_BREKING_BAD_API}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);
  return (
    <div style={{ textAlign: "center" }}>
      {char && (
        <div style={{ textAlign: "center" }}>
          <h1>{char.name}</h1>
          <img src={char.img} alt="foto" className="foto" />
          <h2>BirthDay : {char.birthday}</h2>
        </div>
      )}
      <div>
        <Link to="/">
          <button className="btn">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
