// DATALIST REDUCER
// ------------------------------

// IMPORTS
const axios = require("axios");
const baseURL = "https://www.googleapis.com/youtube/v3"
const methodURL = "/playlistItems"

const keys = ["part=","snippet&", // formatted in array so its easier to edit
    "playlistId=", "PLaDrN74SfdT6duuVl_8qxJ5eaaPHRX_ij&",
    "key=", "AIzaSyDuElzfRNhtqV5iOKLehHDMveYLOwgP3dA&",
    "maxResults=", "50"
]
let mfURL = baseURL + methodURL + "?" + keys.join('')


// ACTION CREATORS
export let getVideos = () => {
    return dispatch => {
        axios.get(mfURL)
            .then(response => {
                dispatch(
                    {
                        type: "GET_VIDEOS",
                        payload: response.data.items.map(item => {
                            item.boyCounter = 0
                            return item
                        })
                    }
                )
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export const changeBoyCounter = (id, increment) => {
    return {
        type: "CHANGE_BOY_COUNTER",
        id,
        increment
    }
}



// REDUCER FUNCTIONS
let videoData = (prevDatalist = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "GET_VIDEOS":
            return {
                loading: false,
                data: [...action.payload]
            };
        case "CHANGE_BOY_COUNTER":
            return {
                ...prevDatalist,
                data: prevDatalist.data.map(video => {
                    if (video.snippet.resourceId.videoId === action.id) {
                        let newVideo = { ...video }
                        if (newVideo.boyCounter + action.increment > -1) {
                            newVideo.boyCounter = video.boyCounter + action.increment
                        }
                        return newVideo
                    } else {
                        return video
                    }
                })
            };
        default:
            return prevDatalist
    }
}

// EXPORTS
export default videoData