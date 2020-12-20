import React from "react";

import css from "./Header.module.css";
import SearchIcon from "../../assets/icons/Search.svg";

class Header extends React.Component {
  render() {
    return (
      <>
        <header id={css.Header} className='container'>
          {/* Navbar */}
          <nav>
            <div className={css.Profile}>
              <p>Login</p>
            </div>
            <div className=''>
              <ul className={css.MainNav}>
                <li>
                  <a href='#home'>Home</a>
                </li>
                <li>
                  <a href='#add'>Add recipe</a>
                </li>
                <li>
                  <a href='#profile'>Profile</a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Hero Text */}
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
            {/* <div className={`form-group ${css.HasSearch}`}>
              <span className={`fas fa-search ${css.FormControlFeedback}`}></span>
              <input type='text' class='form-control' placeholder='Search' />
            </div> */}
          </div>
        </header>
      </>
    );
  }
}

export default Header;
