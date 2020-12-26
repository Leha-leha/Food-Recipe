import React , { Component } from "react";
import { Container } from "react-bootstrap";
import "./search.css"


export default class popularRecipe extends Component {
    render() {
        const { id_rcp , title_rcp , img_rcp } =this.props; 
        return(
            <>

            <ul className="gallery">
                <li>
                    <input type="hidden" name="id_rcp" value={id_rcp}  />
                    <img className="feed-food" src={img_rcp} alt="" />
                <div className="text-block">
                    <h4>
                       {title_rcp} 
                    </h4>
                </div>
                </li>
            </ul>
            </>
        );
    }
}