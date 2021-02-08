import React, { Component } from "react";
import { Container, Modal, Button, Form } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import EditProfileBtn from "../../assets/icons/edit-image.png";
import Trash from "../../assets/icons/trash.png";
import { toast } from "react-toastify";

import axios from "axios";

import detail from "./Detail.module.css";
import { getSingleRecipe } from "../../redux/actionCreators/Recipes";
// import Image from '../../assets/4da51338c06dd21688b82eae3bc9dfa6.jpg'
// import Loading from '../../assets/gifs/spinner.gif'
import LikedIcon from "../../assets/icons/like.png";
import SavedIcon from "../../assets/icons/saved.png";
import PlayIcon from "../../assets/icons/play.png";
// import PhotoUser from "../../assets/photo-comment.png";

const url = process.env.REACT_APP_URL;

class Detail extends Component {
  state = {
    recipe: {},
    editRecipe: {},
    imgRecipe: "",
    videoRecipe: [],
    idRecipe: 0,
    userId: 0,
    comments: [],
    addComment: "",
    msg: "",
    show: false,
    title_rcp: "",
    ingridients_rcp: "",
    desc_rcp: "",
    img: null,
    videos: null,
    liked: false,
    saved: false,
  };

  getRecipeById = async () => {
    const { id } = this.props.match.params;
    this.setState({
      idRecipe: id,
    });
    await this.props.dispatch(getSingleRecipe(id));

    const { recipes } = this.props;
    if (recipes.singleRecipe.msg) {
      this.props.history.push("/recipe");
    } else {
      this.setState({
        recipe: recipes.singleRecipe.data[0],
        editRecipe: recipes.singleRecipe.data[0],
        title_rcp: recipes.singleRecipe.data[0].title_rcp,
        ingridients_rcp: recipes.singleRecipe.data[0].ingridients_rcp,
        desc_rcp: recipes.singleRecipe.data[0].desc_rcp,
      });
      const image = JSON.parse(this.state.recipe.img_rcp)[0];
      this.setState({
        imgRecipe: image,
      });
      const video = JSON.parse(this.state.recipe.video_rcp);
      this.setState({
        videoRecipe: video,
      });
    }
    // console.log(this.state)
  };

  getlike = async () => {
    const { id } = this.props.match.params;
    const userid = localStorage.getItem("userId");
    await axios
      .get(`${process.env.REACT_APP_URL}/likes/detail/${id}/${userid}`)
      .then((res) => {
        console.log("GET LIKE");
        console.log(res.data.data.length);
        const liked = res.data.data.length;
        liked === 1
          ? this.setState({ liked: true })
          : this.setState({ liked: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getsave = async () => {
    const { id } = this.props.match.params;
    const userid = localStorage.getItem("userId");
    await axios
      .get(`${process.env.REACT_APP_URL}/saves/detail/${id}/${userid}`)
      .then((res) => {
        //console.log("GET Save");
        console.log(res.data.data.length);
        const liked = res.data.data.length;
        liked === 1
          ? this.setState({ saved: true })
          : this.setState({ saved: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getCommentByRecipe = async () => {
    const { id } = this.props.match.params;
    // const userid = await localStorage.getItem("userId");
    await axios
      .get(`${process.env.REACT_APP_URL}/comments/${id}`)
      .then((res) => {
        console.log(res);
        this.setState({
          comments: res.data.comment,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handlerChange = (e) => {
    const value = e.target.value;
    this.setState({
      addComment: value,
    });
  };

  addComment = async () => {
    const { id } = this.props.match.params;
    const userid = await localStorage.getItem("userId");
    const data = {
      user_id: userid,
      recipe_id: id,
      comment: this.state.addComment,
    };
    await axios
      .post(`${process.env.REACT_APP_URL}/comments`, data)
      .then((res) => {
        console.log(res);
        this.setState({
          like: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      addComment: "",
    });
    this.getCommentByRecipe();
  };

  addLike = async () => {
    const { id } = this.props.match.params;
    const userid = await localStorage.getItem("userId");
    const data = {
      recipe_id: id,
      user_id: userid,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/likes`, data)
      .then((res) => {
        console.log(res);
        this.setState({
          liked: true,
        });
        this.setState({
          msg: res.data.msg.this.notify("Error"),
        });
      })
      .catch((err) => {
        console.log(err);
        this.notify("success");
      });
  };

  notify = (arg) => {
    if (arg === "success") {
      toast.warn("Your Already Like");
    } else if (arg === "Error") {
      toast.info("Your unlike this recipe");
    }
  };

  unLike = async () => {
    const { id } = this.props.match.params;
    const userid = await localStorage.getItem("userId");
    const data = {
      user_id: userid,
    };
    axios
      .delete(`${process.env.REACT_APP_URL}/likes/${id}`, { data: data })
      .then((res) => {
        console.log(res);
        this.setState({
          liked: false,
        });
        this.setState({
          msg: res.data.msg.this.unLiked("error"),
        });
      })
      .catch((err) => {
        console.log(err);
        this.unLiked("success");
      });
  };

  unLiked = (arg) => {
    if (arg === "success") {
      toast.warn("You unlike recipes");
    } else if (arg === "error") {
      toast.error("error");
    }
  };

  addSave = async () => {
    const { id } = this.props.match.params;
    const userid = await localStorage.getItem("userId");
    const data = {
      recipe_id: id,
      user_id: userid,
    };
    axios
      .post(`${process.env.REACT_APP_URL}/saves`, data)
      .then((res) => {
        console.log(res);
        this.setState({
          saved: true,
        });
        this.setState({
          msg: res.data.msg.this.saved("error"),
        });
      })
      .catch((err) => {
        console.log(err);
        this.saved("success");
      });
  };

  saved = (arg) => {
    if (arg === "success") {
      toast.warn("You save recipes");
    } else if (arg === "error") {
      toast.error("error");
    }
  };

  unSave = async () => {
    const { id } = this.props.match.params;
    const userid = await localStorage.getItem("userId");
    const data = {
      user_id: userid,
    };
    axios
      .delete(`${process.env.REACT_APP_URL}/saves/${id}`, { data: data })
      .then((res) => {
        console.log(res);
        this.setState({
          saved: false,
        });
        this.setState({
          msg: res.data.msg.this.unSaved("error"),
        });
      })
      .catch((err) => {
        console.log(err);
        this.unSaved("success");
      });
  };

  unSaved = (arg) => {
    if (arg === "success") {
      toast.warn("You unsave recipes");
    } else if (arg === "error") {
      toast.error("error");
    }
  };

  deleteComment = async (id) => {
    console.log(`hapus comment ${id}`);
    await axios
      .delete(`${process.env.REACT_APP_URL}/comments/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.getCommentByRecipe();
  };

  deleteRecipe = async () => {
    const { id } = this.props.match.params;
    await axios
      .delete(`${process.env.REACT_APP_URL}/recipe/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/profile");
  };

  handleClose = () =>
    this.setState({
      show: false,
    });
  handleShow = () =>
    this.setState({
      show: true,
    });

  handlerEdit = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitEdit = async (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const data = new FormData();
    data.append("title_rcp", this.state.title_rcp);
    data.append("ingridients_rcp", this.state.ingridients_rcp);
    data.append("desc_rcp", this.state.desc_rcp);
    if (this.state.img !== null) {
      data.append("img", this.state.img);
    }
    if (this.state.videos !== null) {
      for (let j = 0; j < this.state.videos.length; j++) {
        data.append("videos", this.state.videos[j]);
      }
    }
    await axios
      .patch(`${process.env.REACT_APP_URL}/recipe/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.getRecipeById();
    this.setState({
      show: false,
    });
  };

  componentDidMount = () => {
    this.getRecipeById();
    this.getCommentByRecipe();
    this.getlike();
  };

  render() {
    const { isPending } = this.props.recipes;
    const userid = Number(localStorage.getItem("userId"));
    // console.log(this.state.editRecipe);
    const { comments } = this.state;
    console.log(this.state.msg);
    console.log(this.state.liked);
    const IdUserRecipe = this.state.recipe.id_user;
    const { title_rcp, ingridients_rcp, desc_rcp } = this.state;
    return (
      <Container>
        {/* animasi loading */}
        {/* { isPending && <div className={ detail.Loading }>
					<img src={Loading} alt=""/>
				</div> } */}
        {/* comment aja klo ga mau dipake, blom fix juga soalnya */}
        <div className="text-center">
          <h1 className={"mx-auto " + detail.Title}>
            {isPending ? "Loading..." : this.state.recipe.title_rcp}
          </h1>
        </div>
        <div
          className={"mx-auto " + detail.ImageSize}
          style={{
            backgroundImage: `url(${!isPending && url + this.state.imgRecipe})`,
          }}
        >
          {IdUserRecipe === userid && (
            <div className="d-flex justify-content-end mr-2">
              <div className={detail.SavedButton} onClick={this.deleteRecipe}>
                <img src={Trash} alt="" />
              </div>
              <div className={detail.LikedButton} onClick={this.handleShow}>
                <img src={EditProfileBtn} alt="" />
              </div>
            </div>
          )}
          <div className={detail.ButtonList}>
            {/* save & unsave */}
            {this.state.saved ? (
              <div className={detail.UnSavedButton}>
                <img src={SavedIcon} alt="" onClick={this.unSave} />
              </div>
            ) : (
              <div className={detail.SavedButton}>
                <img src={SavedIcon} alt="" onClick={this.addSave} />
              </div>
            )}

            {/* like & unlike */}
            {this.state.liked ? (
              <div className={detail.UnLikedButton}>
                <img src={LikedIcon} alt="" onClick={this.unLike} />
              </div>
            ) : (
              <div className={detail.LikedButton}>
                <img src={LikedIcon} alt="" onClick={this.addLike} />
              </div>
            )}
          </div>
        </div>
        <div className={"mx-auto " + detail.Description}>
          <h2 className={detail.TextDesc}>Ingredients</h2>
          <div className={detail.StepList}>
            <span style={{ whiteSpace: "pre-line" }}>
              {!isPending && this.state.recipe.ingridients_rcp}
            </span>
            <br />
            <span>{!isPending && this.state.recipe.desc_rcp}</span>
          </div>
          <h2 className={detail.TextVideo}>Video Step</h2>
          <div className={detail.VideoList}>
            {!isPending &&
              this.state.videoRecipe.map((_, index) => {
                index++;
                return (
                  <Link
                    key={index}
                    to={{ pathname: `/recipe/${this.state.idRecipe}/${index}` }}
                  >
                    <div className={detail.VideoItem}>
                      <img src={PlayIcon} alt="Play" />
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className={"text-center " + detail.CommentSection}>
            <textarea
              name="comment"
              id=""
              value={this.state.addComment}
              className={detail.CommentForm}
              onChange={this.handlerChange}
              placeholder="Comment"
            ></textarea>
            <button className={detail.CommentButton} onClick={this.addComment}>
              Send
            </button>
          </div>
          <div className={detail.CommentList}>
            <h2 className={detail.TextComment}>Comment</h2>
            {comments !== 0 &&
              comments.map(
                ({ comment, name_user, photo_user, id_user, id }, index) => {
                  return (
                    <div className={"d-flex " + detail.CommentItem} key={index}>
                      <div
                        className={detail.ImageItem}
                        style={{
                          backgroundImage: `url(${
                            url + JSON.parse(photo_user)
                          })`,
                        }}
                      ></div>
                      <div className={detail.CommentUser}>
                        <span className={detail.CommentUserName}>
                          {name_user}
                        </span>
                        <br />
                        <span className={detail.CommentUserText}>
                          {comment}
                        </span>
                        <br />
                        {id_user === userid && (
                          <Button
                            onClick={() => {
                              console.log(id);
                              this.deleteComment(id);
                            }}
                            style={{
                              backgroundColor: "#EFC81A",
                              color: "black",
                              borderWidth: 0,
                              padding: 3,
                            }}
                          >
                            <span
                              style={{
                                marginBottom: 0,
                                fontFamily: "Airbnb Cereal App Light",
                              }}
                            >
                              delete
                            </span>
                          </Button>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
        {/* Modal edit */}
        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Body */}
            <Form>
              <Form.Group>
                <Form.File
                  id="exampleFormControlFile1"
                  label="Image Recipe"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    this.setState({ img: file });
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title_rcp"
                  placeholder="Title"
                  value={title_rcp}
                  onChange={this.handlerEdit}
                />
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                  as="textarea"
                  name="ingridients_rcp"
                  rows={7}
                  value={ingridients_rcp}
                  onChange={this.handlerEdit}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="desc_rcp"
                  rows={3}
                  value={desc_rcp}
                  onChange={this.handlerEdit}
                />
              </Form.Group>
              <Form.Group>
                <Form.File
                  id="exampleFormControlFile2"
                  label="Video"
                  onChange={(e) => {
                    const file = e.target.files;
                    this.setState({ videos: file });
                  }}
                  multiple
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.submitEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

const mapsStateToProps = ({ recipes }) => {
  return {
    recipes,
  };
};

export default connect(mapsStateToProps)(withRouter(Detail));
