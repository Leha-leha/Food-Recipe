import React from "react";
import { withRouter, Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

import css from "./Header.module.css";
import SearchIcon from "../../assets/icons/Search.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        {/* NAVBAR */}
        <Navbar />

        {/* HERO TEXT */}
        <div className={`${css.HeroTextBox} container`}>
          <h1>
            Discover Recipe
            <br />& Delicious Food
          </h1>
          <div className={css.SearchArea}>
            <div className={css.SearchBar}>
              <img src={SearchIcon} className={css.SearchIcon} alt='search' />
              <input
                type='text'
                name='recipe'
                className={css.Search}
                placeholder='Search Restaurant, Food'
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
