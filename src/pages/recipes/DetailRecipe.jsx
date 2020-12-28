import React, { Component } from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Detail from '../../components/Detail/Detail'
import Footer from '../../components/Footer/Footer'
import { ToastContainer, Toast } from "react-toastify";

class DetailRecipe extends Component {
	render () {
		return (
			<>
				<Navbar />
				<Detail />
				<Footer />
				<ToastContainer />
			</>
		)
	}
}

export default DetailRecipe