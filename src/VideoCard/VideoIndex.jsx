import React from 'react';
import "./videoIndex.css"
import { Link } from "react-router-dom"

function VideoIndex({allVideo}) {
    return (
        <div className="indexPage">           
            {allVideo.map(vid => {
                return (
                    <div>                   
                       <Link to={`/videos/${vid.id.videoId}`}>
                        <img className="image" src={vid.snippet.thumbnails.high.url} alt="" />
                        </Link> 
                        <p>{vid.snippet.title}</p>                                  
                    </div>
                )
            })}   
        </div>
    )
}
// test/test
export default VideoIndex;