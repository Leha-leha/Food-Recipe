import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

import nav from './Navbar.module.css'
import UserLoginIcon from '../../assets/icons/default-login-icon.png'

class MyNavbar extends Component {
	render () {
		return (
			<Navbar className={nav.Navbar + " my-navbar"} variant="light">
				<Container>
				<Nav className="mr-auto">
					<Nav.Link className={nav.NavLink} href="#home">Home</Nav.Link>
					<Nav.Link className={nav.NavLink} href="#features">Add Recipe</Nav.Link>
					<Nav.Link className={nav.NavLink} href="#pricing">Profile</Nav.Link>
				</Nav>
				<Nav className="ml-auto">
					<Nav.Link href="#home">
						<div className={nav.DefaultUserLogin}>
							<div className={nav.isNotif}></div>
							<img src={UserLoginIcon} alt="Login User" />
						</div>
					</Nav.Link>
				</Nav>
				</Container>
			</Navbar>
		)
	}
}

export default MyNavbar