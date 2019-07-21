import React from "react";
import Bookcard from "./Bookcards"


function SavedBooks(props) {
    return (
        <div>
            {props.saved.map((book) =>{
              return  <Bookcard title={props.title} author={props.author} img={props.image} />
            })
            }
        </div>
    )
} 

export default SavedBooks;