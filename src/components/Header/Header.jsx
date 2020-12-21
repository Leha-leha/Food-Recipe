import React from "react";
import { withRouter, Link } from "react-router-dom";

import css from "./Header.module.css";
import SearchIcon from "../../assets/icons/Search.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        {/* NAVBAR */}
        <nav className='navbar navbar-expand-lg'>
          <div className='container'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className={`navbar-nav mb-2 mt-4 mb-lg-0 ${css.MainNav}`}>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#home'
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#add'>
                    Add Recipe
                  </a>
                </li>
                <li className='nav-item'>
                  <Link to={{ pathname: '/profile' }} className='nav-link'>
                    Profile
                  </Link>
                </li>
              </ul>
              <ul className={`navbar-nav mb-2 mt-4 ms-auto mb-lg-0 ${css.Auth}`}>
                <li className='nav-item' onClick={() => this.props.history.push('/login')}>
                  <a
                    className='nav-link'
                    href='/login'
                    tabindex='-1'
                    aria-disabled='true'
                  >
                    <i className='fas fa-user-circle me-2'></i>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

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
