import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import Mama from "../../assets/Group 697.png";
import Background from "../../assets/76c7e3577554580136d5f65222046a21.png";

export default class Index extends Component {
  render() {
    return (
      <div className="container-fluid h-100">
        <div className="row container-xxl">
          <div
            className="position-relative d-none ml-n5 d-md-block col-md-4 col-lg-6 p-0"
            style={{ backgroundColor: "yellow" }}
          >
            <img
              src={Background}
              alt="background"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="w-100 full-h"
            />
            <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
              <img src={Mama} alt="logo" />
            </div>
          </div>
          <div className="full-h d-flex justify-content-center align-items-center col-12 col-md-8 col-lg-6">
              <div className="col-10 col-md-8 col-xl-6 d-flex flex-column justify-content-center align-items-center font-weight-medium">
                  <h2 className="main font-weight-bold">Welcome</h2>
                  <span className="log mt-4 mb-4 font-weight-normal">Log In into your existing account</span>
                  <Form className="w-100 mb-3 mt-3">
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>E-mail</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" className="pt-4 pb-4 pl-4 pr-0 input" required/>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" className="pt-4 pb-4 pl-4 pr-0 input" required/>
                      </Form.Group>

                      <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="I agree to terms & conditions" required/>
                      </Form.Group>

                      <Button variant="warning" type="submit" className="w-100 btn-main pt-2 pb-2 font-weight-medium">
                          Log In
                      </Button>
                  </Form>
                  <div className="w-100 d-flex flex-column">
                      <div className="w-100 row justify-content-end mb-3">
                          <Link to="" className="main clicked text-decoration-none">
                              Forgot Password?
                          </Link>
                      </div>
                      <div className="w-100 row justify-content-center">
            <span className="blur-color">
              Don't have an account? <Link to="/auth/signup" className="main-color clicked text-decoration-none"> Sign Up </Link>
            </span>
          </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
