import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/auth/Index';

const Router = () => {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Login} />
		</BrowserRouter>
	)
}

export default Router