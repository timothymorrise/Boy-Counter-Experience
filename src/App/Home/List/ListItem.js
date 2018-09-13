// LIST ITEM -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React from 'react'
import { Link } from "react-router-dom"

// CONSTRUCTOR
function ListItem(props) {
    return (
        <div className="list-item">
            <Link to={`/videos/${props.videoId}`}>
                <div className="list-item-image" style={{ backgroundImage: `url(${props.url})` }}></div>
                <h2 className="list-item-title">
                    {props.title}
                </h2>
            </Link>
            <br />
        </div>
    )
}

export default ListItem
