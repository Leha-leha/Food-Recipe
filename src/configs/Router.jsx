import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Homepage from "../pages/Homepage/Homepage";
import Login from '../pages/auth/Index';
import Register from "../pages/auth/Register";
import Forgot from "../pages/auth/Forgot";
import Profile from '../pages/Profile/Profile'
import Code from "../pages/auth/Code";
import Reset from "../pages/auth/Reset";
import Chat from "../pages/chat/Chat";

const Router = () => {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Homepage} />
			<Route path='/login' component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/forgot" component={Forgot} />
			<Route path="/code" component={Code} />
			<Route path="/reset" component={Reset} />
			<Route path='/profile' component={Profile} />
			<Route path='/chat' component={Chat} />
		</BrowserRouter>
	)
}

export default Router