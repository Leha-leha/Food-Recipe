import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const tokenLogin = localStorage.getItem("token");
console.log(tokenLogin);

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        tokenLogin.length !== 0 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
