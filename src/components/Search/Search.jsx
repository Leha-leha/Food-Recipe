import React, { Component } from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import axios from "axios";

const url = process.env.REACT_APP_URL + '/search?'
const urlParams = new URLSearchParams(window.location.search)

export default class Search extends Component {
    state = {
        recipes: [],
        page: []
    }

    getRecipes = () => {
        axios.get(url + urlParams).then(({ data }) => {
            this.setState({
                recipes: data.recipe,
                page: data.pageInfo,
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount = () => {
        this.getRecipes()
    }

    componentDidUpdate = () => {
        if(prevProps.location.search !== this.props.location.search){
            this.getRecipes()
          }
    }
    render() {
        const { recipes, page } = this.state
        let load,searchRecipe, prev, next
        if (pageInfo.previousPage)
        return (
            <>
                
            </>
        )
    }
}
