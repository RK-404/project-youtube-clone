import YouTube from 'react-youtube';
import Form from './Form';
import { useParams } from 'react-router';

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
         <hr />
        </div>
         <div >           
            {allVideo.map(vid => {
                return (
                    <div className='showVid-side'>                   
                      {/* <Link to={`/videos/${vid.id.videoId}`}> */}
                        <img className="showVid-image" src={vid.snippet.thumbnails.high.url} alt="" />
                        {/* </Link>  */}
                        <p className='showVid-p'>{vid.snippet.title}</p>                                  
                    </div>
                )
            })}   
          </div>
     </div>
  
  )
          
}
export default Video;