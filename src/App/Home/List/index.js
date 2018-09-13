// List -- Component
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from 'react';
import { connect } from "react-redux";

// IMPORT FILES -- COMPONENTS, CSS
import ListItem from "./ListItem"
import "./List.css"

// CONSTRUCTOR
class List extends Component {
    render() {
        let { loading, data } = this.props
        if (!loading) console.log(this.props)

        // MAP LIST IEMS
        let mapListItems = () => {
            return data.map(dataObject => {
                // DECONSTRUCTIONS
                let { snippet } = dataObject
                let { title } = snippet
                let { url } = snippet.thumbnails.medium
                let { videoId } = snippet.resourceId
                // RETURN
                return <ListItem  key={videoId} 
                    title={title} 
                    url={url} 
                    videoId={videoId} />  
            })
        }

        return (
            loading ?
                <div id="list"> ...loading </div>
                :
                <div id="list">
                    <div>
                        {mapListItems()}
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state.videoData
}

export default connect(mapStateToProps, {})(List);
