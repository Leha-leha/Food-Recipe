import React, { Component } from "react";
import { Container } from "react-bootstrap";
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
import PhotoUser from "../../assets/photo-comment.png";

class Detail extends Component {
  state = {
    recipe: {},
    imgRecipe: "",
    videoRecipe: [],
    idRecipe: 0,
    userId: 0,
    comments: [],
    addComment: "",
    msg: "",
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

  getCommentByRecipe = async () => {
    const { id } = this.props.match.params;
    const userid = await localStorage.getItem("userId");
    await axios
      .get(`http://localhost:5000/comments/${id}`)
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
      .post("http://localhost:5000/comments", data)
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
      .post("http://localhost:5000/likes", data)
      .then((res) => {
        console.log(res);
        this.setState({
          msg: res.data.msg.this.notify("Error") ,
        });
      })
      .catch((err) => {
        console.log(err);
        this.notify("success")
      });
  };

  notify = (arg) => {
    if(arg === "success"){
      toast.warn("Your Already Like")
    } else if(arg === "Error") {
      toast.success("Your like this recipe")
    }
  }


  unLike = async () => {
    const { id } = this.props.match.params;
    const userid = await localStorage.getItem("userId");
    const data = {
      user_id: userid,
    };
    axios
      .delete(`http://localhost:5000/likes/${id}`, { data: data })
      .then((res) => {
        console.log(res);
        this.setState({
          msg: res.data.msg,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addSave = async () => {
    const { id } = this.props.match.params;
    const userid = await localStorage.getItem("userId");
    const data = {
      recipe_id: id,
      user_id: userid,
    };
    axios
      .post("http://localhost:5000/saves", data)
      .then((res) => {
        console.log(res);
        this.setState({
          msg: res.data.msg,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  unSave = async () => {
    const { id } = this.props.match.params;
    const userid = await localStorage.getItem("userId");
    const data = {
      user_id: userid,
    };
    axios
      .delete(`http://localhost:5000/saves/${id}`, { data: data })
      .then((res) => {
        console.log(res);
        this.setState({
          msg: res.data.msg,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteComment = async (id) => {
    console.log(`hapus comment ${id}`);
    await axios
      .delete(`http://localhost:5000/comments/${id}`)
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
      .delete(`http://localhost:5000/recipe/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/profile");
  };

  componentDidMount = () => {
    this.getRecipeById();
    this.getCommentByRecipe();
  };

  render() {
    const { isPending } = this.props.recipes;
    const userid = localStorage.getItem("userId");
    console.log(userid);
    const { comments } = this.state;
    console.log(this.state.msg);

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
            backgroundImage: `url(${!isPending && this.state.imgRecipe})`,
          }}
        >
          <div className="d-flex justify-content-end mr-2">
            <div className={detail.SavedButton} onClick={this.deleteRecipe}>
              <img src={Trash} alt="" />
            </div>
            <div className={detail.LikedButton}>
              <img src={EditProfileBtn} alt="" />
            </div>
          </div>
          <div className={detail.ButtonList}>
            <div className={detail.SavedButton}>
              <img src={SavedIcon} alt="" onClick={this.addSave} />
            </div>
            <div className={detail.LikedButton}>
              <img src={LikedIcon} alt="" onClick={this.addLike} />
            </div>
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
                ({ comment, name_user, photo_user, id_user, id }) => {
                  return (
                    <div className={"d-flex " + detail.CommentItem}>
                      <div
                        className={detail.ImageItem}
                        style={{
                          backgroundImage: `url(${JSON.parse(photo_user)})`,
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
                        {id_user == userid && (
                          <a
                            onClick={() => {
                              console.log(id);
                              this.deleteComment(id);
                            }}
                          >
                            delete
                          </a>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
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
