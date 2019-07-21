import React from "react";

function Bookcard(props) {
    return (
        <div>
            <img src={props.img} />
            <div>
                Title: {props.title}
                Author: {props.Author}
            </div>
            <button onClick={props.onClick} id={props.id}>Save</button>
        </div>
    )
}

export default Bookcard;