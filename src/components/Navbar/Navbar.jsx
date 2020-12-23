import React from "react";
import { withRouter, Link } from "react-router-dom";

import css from "./Navbar.module.css";

class Navbar extends React.Component {
	render() {
		return (
      <>
        {/* NAVBAR */}
        <nav className='navbar navbar-expand-lg'>
          <div className='container'>
            <button
              className={`navbar-toggler ${css.NavToggler}`}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <i class='fas fa-bars'></i>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className={`navbar-nav mb-2 mt-4 mb-lg-0 ${css.MainNav}`}>
                <li className='nav-item'>
                  <Link to={{ pathname: "/" }} className='nav-link active'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={{ pathname: "/addrecipe" }} className='nav-link'>
                    Add Recipes
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to={{ pathname: "/profile" }} className='nav-link'>
                    Profile
                  </Link>
                </li>
              </ul>
              <ul
                className={`navbar-nav mb-2 mt-4 ms-auto mb-lg-0 ${css.Auth}`}
              >
                <li
                  className='nav-item'
                  onClick={() => this.props.history.push("/login")}
                >
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
      </>
    );
	}
}

export default withRouter(Navbar);
// import React, { Component } from 'react'
// import { Container, Navbar, Nav } from 'react-bootstrap'

// import nav from './Navbar.module.css'
// import UserLoginIcon from '../../assets/icons/default-login-icon.png'

// class MyNavbar extends Component {
// 	render () {
// 		return (
// 			<Navbar className={nav.Navbar + " my-navbar"} variant="light">
// 				<Container>
// 				<Nav className="mr-auto">
// 					<Nav.Link className={nav.NavLink} href="#home">Home</Nav.Link>
// 					<Nav.Link className={nav.NavLink} href="#features">Add Recipe</Nav.Link>
// 					<Nav.Link className={nav.NavLink} href="#pricing">Profile</Nav.Link>
// 				</Nav>
// 				<Nav className="ml-auto">
// 					<Nav.Link href="#home">
// 						<div className={nav.DefaultUserLogin}>
// 							<div className={nav.isNotif}></div>
// 							<img src={UserLoginIcon} alt="Login User" />
// 						</div>
// 					</Nav.Link>
// 				</Nav>
// 				</Container>
// 			</Navbar>
// 		)
// 	}
// }

// export default MyNavbar