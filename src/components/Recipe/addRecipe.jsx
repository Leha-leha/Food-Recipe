import { Container } from "react-bootstrap";
import React,{useState} from 'react';
import {useSelector, useDispatch} from "react-redux";

import {uploadRecipeCreator} from '../../redux/actionCreators/Recipes';
import squareImg from "../../assets/icons/imageupload.png";
import css from "./add.module.css";
import {toast} from 'react-toastify';


toast.configure();

let Addon = () => {
    const dispatch = useDispatch();

    // const user = userSelector((state)=>state.user.user[0])

  const [form,setForm]=useState({
    title_rcp:null,
    img_rcp:[],
    ingredients_rcp:null,
    video_rcp:null,
    files:[],
  })

  const hiddenFileInput = React.useRef(null);
  
  const handleClickUpload = event => {
    hiddenFileInput.current.click();
  };

  const handleSubmit = ()=>{
    dispatch(uploadRecipeCreator(form.title_rcp,form.img_rcp,form.ingredients_rcp,form.video_rcp,form.files[1]));
  }


  console.log(setForm.files)
  return (
    <div style={{ marginBottom: "20rem" }}>
      <Container
        fluid
        className={`${css.ContainerOne} d-flex flex-column align-items-center pt-5`} >
        <p style={{color: "gray" , fontSize:"5px" , position:"relative" , right: "1rem"}} className="mb-n1">Image</p>
        <img src={squareImg} alt="" />
        <button className={css.UploadBtn} onClick={handleClickUpload}>Add Photo</button>
        <input type="file" multiple className="form-control form-control-sm" 
            ref={hiddenFileInput} style={{display:'none'}} id="colFormLabel"
            onChange={(e)=>setForm({...form,files:e.target.files})}
          />
      </Container>
      <div className={`${css.FormInput} text-center`}>
        <input type="text" placeholder="Title" className={css.Title} onChange={(e)=>setForm({...form,title_rcp:e.target.value})} />
        <textarea
          rows="15"
          cols="110"
          placeholder="Ingredients"
          className={`${css.TextArea} mt-4 pt-3 `}
          onChange={(e)=>setForm({...form,ingredients_rcp:e.target.value})}
        ></textarea>
      </div>
      <Container fluid className={`${css.ContainerTwo}`} >
        <button className={css.UploadBtn} onClick={handleClickUpload}>Video</button>
      </Container>
      <div className="d-flex justify-content-center">
        <button className={`${css.PostBtn} mt-5`} onClick={handleSubmit}>Post</button>
        </div>
    </div>
  );
};

export default Addon;
