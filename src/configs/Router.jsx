import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/auth/Index';
import Register from "../pages/auth/Register";
import Forgot from "../pages/auth/Forgot";

const Router = () => {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Login} />
			<Route exact path="/register" component={Register} />
			<Route exact path="/forgot" component={Forgot} />
		</BrowserRouter>
	)
}

export default Router