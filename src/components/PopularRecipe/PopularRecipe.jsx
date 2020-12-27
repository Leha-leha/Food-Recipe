import React from "react";
import axios from "axios";

import ListRecipe from "../ListRecipe/ListRecipe";

import css from "./PopularRecipe.module.css";

class PopularRecipe extends React.Component {
  state = {
    PopularRecipes: {},
  };

  getPopularRecipes = () => {
    axios
      .get(`${process.env.REACT_APP_URL}/recipes`)
      .then(({ data }) => {
        this.setState({
          PopularRecipes: data
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getPopularRecipes();
  }

  render() {
    const { PopularRecipes } = this.state;
    return (
      <main id={css.Main}>
        <div style={{ float: "none" }}></div>
        <div className='container'>
          <div className={`${css.HeadLine} mb-5`}>
            <h2>Popular Recipe</h2>
          </div>
          <div className={`${css.Wrapper}`}>
            {PopularRecipes.data &&
              PopularRecipes.data
                .filter((item, index) => index < 6) // limit the recipes
                .map(({ title_rcp, img_rcp, id_rcp }) => {
                  return (
                    <ListRecipe
                      idUrl={id_rcp}
                      img={JSON.parse(img_rcp)[0]}
                      title={title_rcp}
                    />
                  );
                })}
          </div>
        </div>
        <footer>
          <div className='container'>
            <div className={css.Slogan}>
              <h1>Eat, Cook, Repeat</h1>
              <p>Share your best recipe by uploading here !</p>
            </div>
            <div className={css.FooterNav}>
              <ul className={css.MainNav}>
                <li>
                  <a href='#product'>Product</a>
                </li>
                <li>
                  <a href='#company'>Company</a>
                </li>
                <li>
                  <a href='#learn'>Learn More</a>
                </li>
                <li>
                  <a href='#contact'>Get In Touch</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    );
  }
}

export default PopularRecipe;