import React, { Component } from "react";
import Bookcard from "../components/Bookcards"
import API from "../util/API"

class Saved extends Component {
    state = {
        savedbooks: []
    }

    getSavedBooks = () => {
        API.getBooks()
        .then(res => this.setState({
            ...this.state,
            savedbooks: res.data
        })
        )
        .catch(err => console.log(err));

    }

    render() {
        return(
            <div>
                {this.getSavedBooks()}
                {console.log(this.state)}
                <h1>hello</h1>
                {/* { this.state.savedbooks.map((book) =>{
                return <Bookcard />
                })
                } */}
            </div>
        )
    }


}

export default Saved;