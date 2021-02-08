import React from "react";
import { Link } from "react-router-dom";

import css from "./ListRecipe.module.css";

const url = process.env.REACT_APP_URL;

const ListRecipe = ({ img, title, idUrl }) => {
  return (
    <div className={`${css.Box}`}>
      <Link to={{ pathname: `recipe/${idUrl}` }}>
        <img
          src={url + img}
          alt={title}
          className="img-fluid"
          style={{ boxShadow: "1px 1px 10px" }}
        />
      </Link>
      <p className={`${css.BottomLeft}`}>{title}</p>
    </div>
  );
};

export default ListRecipe;
