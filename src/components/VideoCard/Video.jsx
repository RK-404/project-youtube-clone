import YouTube from 'react-youtube';
import Form from './Form';
import { useParams } from 'react-router';
import { Link } from "react-router-dom"

import './video.css'

function Video({allVideo}) {
   let {id} = useParams()
   const opts = {
     height: '390',
     width: '640',
     playerVars: {
       // https://developers.google.com/youtube/player_parameters
       autoplay: 1,
     },
   };
   const _onReady = (event) =>  {
     // access to player in all event handlers via event.target
     event.target.pauseVideo();
   }
         
  return (
   
    <div className='showVid-main'>
        <div>
         <YouTube className='showVid' videoId={id} opts={opts} onReady={_onReady} />
         <hr />
         <Form/>
        </div>
        <div >           
          {allVideo.map(vid => {
              return (
                <div key={vid.id.videoId} className='showVid-side'>                   
                  <Link to={`/videos/${vid.id.videoId}`}>
                    <img className="showVid-image" src={vid.snippet.thumbnails.high.url} alt="" />                             
                  </Link>
                  <Link to={`/videos/${vid.id.videoId}`}>
                    <p className='showVid-p'>{vid.snippet.title}</p>
                  </Link>
                </div>
              )
          })}   
        </div>
    </div>
  
  )
          
}
export default Video;