import React, { Component } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import profile from "./Profile.module.css";
import ImageProfile from "../../assets/images/profile/profile.png";
import EditProfileBtn from "../../assets/icons/edit-image.png";

class Profile extends Component {
  state = {
    showEdit: false,
    profile: {},
    myrecipe: [],
    likedrecipe: [],
    savedrecipe: [],
  };

  myListActive = (e) => {
    const ListId = e.target.dataset.id;
    const buttons = document.querySelectorAll("." + profile.ItemTitle);
    const contentPartSection = document.querySelectorAll(
      "." + profile.ItemList
    );
    // remove class active-type and show-section
    buttons.forEach((item) => item.classList.remove(profile.ItemTitleActive));
    contentPartSection.forEach((item) =>
      item.classList.remove(profile.ItemListActive)
    );
    // add class active-type and show-section
    e.target.classList.add(profile.ItemTitleActive);
    document.querySelector(`#${ListId}`).classList.add(profile.ItemListActive);
  };

  updateEditSection = () => {
    if (this.state.showEdit) {
      this.setState({
        showEdit: false,
      });
    } else {
      this.setState({
        showEdit: true,
      });
    }
  };

  getUser = async () => {
    const userid = await localStorage.getItem("userId");
    axios
      .get(`http://localhost:5000/user/${userid}`)
      .then((res) => {
        const profile = res.data.data[0];
        this.setState({
          profile: profile,
        });
        //console.log(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getMyRecipe = async () => {
    const userid = await localStorage.getItem("userId");
    axios
      .get(`http://localhost:5000/recipes/${userid}`)
      .then((res) => {
        this.setState({
          myrecipe: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getLikedRecipe = async () => {
    const userid = await localStorage.getItem("userId");
    axios
      .get(`http://localhost:5000/likes/${userid}`)
      .then((res) => {
        this.setState({
          likedrecipe: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getSavedRecipe = async () => {
    const userid = await localStorage.getItem("userId");
    axios
      .get(`http://localhost:5000/saves/${userid}`)
      .then((res) => {
        this.setState({
          savedrecipe: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getUser();
    this.getMyRecipe();
    this.getLikedRecipe();
    this.getSavedRecipe();
  };

  render() {
    console.log(this.state);
    //console.log(this.state.myrecipe);
    const { myrecipe, likedrecipe, savedrecipe } = this.state;
    console.log(myrecipe);
    return (
      <>
        <div className={profile.Section}>
          <div
            className={profile.Image + " mx-auto"}
            style={{ backgroundImage: `url(${ImageProfile})` }}
          >
            <img
              src={EditProfileBtn}
              className={profile.EditButton}
              alt=""
              height="24px"
              width="24px"
              onClick={this.updateEditSection}
            />
          </div>
          <div className={"mx-auto text-center "}>
            <p className={profile.Username + " mt-2"}>
              {this.state.profile.name_user}
            </p>
          </div>
          <div
            className={
              this.state.showEdit
                ? `${profile.EditSection} mx-auto ${profile.Show}`
                : `${profile.EditSection} mx-auto `
            }
          >
            <button className={profile.DefaultBtn + " d-block"}>
              Change Photo Profile
            </button>
            <button className={profile.DefaultBtn + " d-block"}>
              Change Password
            </button>
          </div>
        </div>
        <Container>
          <div className="my-list d-flex mt-5">
            <p
              className={profile.ItemTitle + " " + profile.ItemTitleActive}
              data-id={"MySection"}
              onClick={this.myListActive}
            >
              My Recipe
            </p>
            <p
              className={profile.ItemTitle}
              data-id={"SavedSection"}
              onClick={this.myListActive}
            >
              Saved Recipe
            </p>
            <p
              className={profile.ItemTitle}
              data-id={"LikedSection"}
              onClick={this.myListActive}
            >
              Liked Recipe
            </p>
          </div>
        </Container>
        <hr />
        <Container>
          <div
            className={profile.ItemList + " " + profile.ItemListActive}
            id="MySection"
          >
            <div className={profile.CardWrapper}>
              {myrecipe &&
                myrecipe.map(({ title_rcp, img_rcp }) => {
                  return (
                    <div
                      className={profile.CardList}
                      style={{
                        backgroundImage: `url('${JSON.parse(img_rcp)}')`,
                      }}
                    >
                      <h1>{title_rcp}</h1>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={profile.ItemList} id="SavedSection">
            <div className={profile.CardWrapper}>
              {savedrecipe &&
                savedrecipe.map(({ title_rcp, img_rcp }) => {
                  return (
                    <div
                      className={profile.CardList}
                      style={{
                        backgroundImage: `url('${JSON.parse(img_rcp)}')`,
                      }}
                    >
                      <h1>{title_rcp}</h1>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className={profile.ItemList} id="LikedSection">
            <div className={profile.CardWrapper}>
              {likedrecipe &&
                likedrecipe.map(({ title_rcp, img_rcp }) => {
                  return (
                    <div
                      className={profile.CardList}
                      style={{
                        backgroundImage: `url('${JSON.parse(img_rcp)}')`,
                      }}
                    >
                      <h1>{title_rcp}</h1>
                    </div>
                  );
                })}
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Profile;
