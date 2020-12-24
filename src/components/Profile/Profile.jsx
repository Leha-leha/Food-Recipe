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

  componentDidMount = () => {
    this.getUser();
  };

  render() {
    console.log(this.state.profile);
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
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
            </div>
          </div>
          <div className={profile.ItemList} id="SavedSection">
            <div className={profile.CardWrapper}>
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
            </div>
          </div>
          <div className={profile.ItemList} id="LikedSection">
            <div className={profile.CardWrapper}>
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
              <div
                className={profile.CardList}
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/16ad/8dbf/cfef9bb1fc6e0bef50d5c8ef7a6cdff6?Expires=1609718400&Signature=UsZkvjrgMz8JuKi4CYyo~vOSqmIp~8GkJ-D3kKqZXa48UtXQ1nAnxkBredr1KFnMSBISKGHG6Kgq-dkYCpE6X3GW~MlHwQ74XYi9rtmsuGw2HYyGl7ZoRzEnWZMNmcXYmCJ1Xpzt1XpWTpq4pG6~XaTpZsZAD2idgx3Oxdl~NhA80tYybTrn6o6FCGfYoIOh9DcRWGczi23CXynx8M5ehqXa~8OoBRhaHDS3v7bcp2ftxYrk7oFu9EltKmF7ZGQeUgjBiIVJQipCkcbOJvN5gqLjONm80XLClyau4l~-12cXbWb6lJk1q-SLdD1xod7lci8Uo9DipHxe~IWyeCGtDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')`,
                }}
              >
                <h1>Bomb Chicken</h1>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Profile;
