import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Addon from "../../components/Recipe/addRecipe";
import Footer from "../../components/Footer/Footer";



class AddRecipe extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Addon />     
        <Footer />
      </div>
    );
  }
}

export default AddRecipe;
