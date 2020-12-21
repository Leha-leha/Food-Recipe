import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Homepage from "../pages/Homepage/Homepage";
import Login from '../pages/auth/Index';

const Router = () => {
	return (
    <BrowserRouter>
      <Route exact path='/' component={Homepage} />
      <Route path='/login' component={Login} />
    </BrowserRouter>
  );
}

export default Router