import React, { Component } from 'react';
import Navbar from "../../components/Navbar/Navbar" ;
import SearchItems from '../../components/searchItems';
import { Container } from "react-bootstrap";
import axios from 'axios'

const base_url = "http://localhost:5000/search?"
console.log(base_url)
const urlParams = new URLSearchParams(window.location.search)

console.log(typeof (urlParams))
console.log(urlParams)

export default class SearchPage extends Component {
    state = {
        items: [],
    }

    getItems = () => {
        axios.get(base_url + urlParams)
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    items: data.recipe,
                    page: data.pageInfo
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    componentDidMount = () => {
        this.getItems()
        console.log("didMount")
    }

    render() {
        console.log(this.state)
        console.log("render")
        const { items } = this.state
        console.log(this.props)
        return (
            <>
                <Navbar />
                <div className="container">
                    <Container>
                        <h3 className="session-tag gap-content">Results</h3>
                    </Container>
                    <div style={{float:'left', width:'80%', height:'80%'}}>
                        {
                            items && items.map(({ id_rcp, title_rcp, img_rcp }) => {
                                return (
                                    <SearchItems id_recipe={id_rcp} title={title_rcp} img={img_rcp} />
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}
