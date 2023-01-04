import React from "react";

export default function Note(props) {
    return (
        <li>
            <a href="#LINK 1">
            <h2>{props.title}</h2><hr />
            <p>{props.content}</p>
            </a>
        </li>
    )
}