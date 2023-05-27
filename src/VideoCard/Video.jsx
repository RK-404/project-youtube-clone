import YouTube from 'react-youtube';
import { useParams } from 'react-router';

function Video() {
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
          
              return <YouTube videoId={id} opts={opts} onReady={_onReady} />;
            
          
          }


        // <div >
        //     <Video key={vid.id.videoId} videoLink={vid.videoLink}/>
        //     <iframe 
        //     width="400" 
        //     height="215" 
        //     src={videoLink}
        //     allow=" 
        //     autoplay; 
        //     clipboard-write; 
        //     encrypted-media; 
        //     picture-in-picture" 
        //     allowfullscreen
        //     title="YouTube video player"  
        //    >        
        //     </iframe>
        // </div>



export default Video;