import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./index.css";
import Mama from "../../assets/Group 697.png";
import Background from "../../assets/76c7e3577554580136d5f65222046a21.png";
import axios from "axios";

export default class Register extends Component {
  state = {
    password_user: "",
  };

  handlerChange = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value,
    });
  };

  newPassOtp = async (e) => {
    e.preventDefault();
    const userId = await localStorage.getItem("userId");
    const data = {
      password_user: this.state.password_user,
    };
    await axios
      .patch(`http://localhost:5000/newpass/${userId}`, data)
      .then((res) => {
        console.log(res);
        this.props.history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    console.log(this.state.password_user);
    return (
      <div className="container-fluid h-100">
        <div className="row">
          <div
            className="position-relative d-none d-md-block col-md-4 col-lg-6 p-0"
            style={{ backgroundColor: "yellow" }}
          >
            <img
              src={Background}
              alt="background"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="w-100 full"
            />
            <div className="mask h-100 w-100 d-flex justify-content-center align-items-center">
              <img src={Mama} alt="logo" />
            </div>
          </div>
          <div className="full d-flex justify-content-center align-items-center col-12 col-md-8 col-lg-6">
            <div className="col-10 col-md-8 col-xl-6 d-flex flex-column justify-content-center align-items-center font-weight-medium">
              <Form className="w-100 mb-3 mt-3" onSubmit={this.newPassOtp}>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Create New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password_user"
                    placeholder="Create New Password"
                    className="pt-4 pb-4 pl-4 pr-0 input"
                    onChange={this.handlerChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="New Password"
                    className="pt-4 pb-4 pl-4 pr-0 input"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agree to terms & conditions"
                    required
                  />
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  className="w-100 btn-main pt-2 pb-2 font-weight-medium"
                >
                  Reset Password
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
