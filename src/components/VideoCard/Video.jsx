import YouTube from 'react-youtube';
import Form from './Form';
import { useParams } from 'react-router';
import { Link } from "react-router-dom"

import './video.css'

function Video({allVideo}) {
   let {id} = useParams()
   const opts = {
     height: '450',
     width: '800',
     playerVars: {
       // https://developers.google.com/youtube/player_parameters
       autoplay: 1,
     },
   };
   const _onReady = (event) =>  {
     // access to player in all event handlers via event.target
     event.target.pauseVideo();
   }

   const currentVideo = allVideo.find(vid => vid.id.videoId === id);

         
  return (
   
    <div className='showVid-main'>
        <div>
         <YouTube className='showVid' videoId={id} opts={opts} onReady={_onReady} />
         {currentVideo ? 
          (<div className='showVid-title'> 
            <h4 dangerouslySetInnerHTML={{ __html: currentVideo.snippet.title }} /> 
            <p>{currentVideo.snippet.channelTitle}</p>
          </div>)
          : null}
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
                    <p className='showVid-p' dangerouslySetInnerHTML={{ __html: vid.snippet.title }} />
                  </Link>
                </div>
              )
          })}   
        </div>
    </div>
  
  )
          
}
export default Video;