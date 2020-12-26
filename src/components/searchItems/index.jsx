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
                    <img className="feed-food" src="https://res.cloudinary.com/zada/image/upload/v1608472385/img-title_hsr2uf.png" alt="" />
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