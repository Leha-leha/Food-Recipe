import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import DetailProfile from '../../components/Profile/Profile'

class Profile extends Component {
	render () {
		return (
			<>
				<Navbar />
				<DetailProfile />
			</>
		)
	}
}

export default Profile