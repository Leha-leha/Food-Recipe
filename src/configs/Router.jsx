import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Homepage from "../pages/Homepage/Homepage";
import Login from '../pages/auth/Index';
<<<<<<< HEAD
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
=======
import Profile from '../pages/Profile/Profile'

const Router = () => {
	return (
    <BrowserRouter>
      <Route exact path='/' component={Homepage} />
      <Route path='/login' component={Login} />
      <Route path='/profile' component={Profile} />
    </BrowserRouter>
  );
>>>>>>> 42d9b53b16ae6aaa01f90be8c4cd7bb0525fe29e
}

export default Router