// HOME -- COMPONENT
// ==============================

// IMPORT FROM PACKAGES
import React, { Component } from "react";
import { connect } from "react-redux";

// IMPORT FROM FILES -- COMPONENTS, CSS
import List from "./List"
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.sendToRandomVideo = this.sendToRandomVideo.bind(this);
    }

    sendToRandomVideo() {
        let randomNumber = (Math.floor(Math.random() * this.props.data.length))
        let { videoId } = this.props.data[randomNumber].snippet.resourceId
        this.props.history.push(`/videos/${videoId}`)
    }

    render() {
        console.log(this.props)
        let { loading, data } = this.props
        return (
            loading ?
                <div> ...loading </div>
                :
                <main className="home">
                    <div className="home-intro">
                        <p>For the uninitiated, the hit web seires "Monster Factory" is
                             a webshow in which the McElroy brothers play video games 
                             and try to create the most bizarre character possible with in-game 
                            customization options. Among the brothers' idiosyncratic sayings is 
                            the frequent deployment of the word "boy" without concern
                             for context </p>
                        <p> This frivilous page lets you count how many times a McElory says "boy" while you watch a video. Think of it like a drinking game,
                            but instead of imbibing legal addictive depressents, you're channeling your
                             existential dread into a monotonous task of measuring the elusive quality of "humor." </p>
                        <p>
                            ENJOY!
                        </p>
                    </div>
                    <button className="home-random-button" onClick={this.sendToRandomVideo}>CLICK FOR A RANDOM VIDEO</button>
                    <List />
                </main>
        )
    }
}

const mapStateToProps = (state) => {
    return state.videoData
}

export default connect(mapStateToProps, {})(Home);
