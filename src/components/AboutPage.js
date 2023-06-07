import './AboutPage.css';
import judyImg from './about-images/judy.jpg';
import kishaImg from './about-images/kisha.jpg';
import teeImg from './about-images/tee.jpg';
import ridwanImg from './about-images/ridwan.jpg';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700&family=Gothic');
</style>

function AboutPage() {
    return (
        <div className='about-page'>
            {/* <h1 className='about-title'>MEET THE <span>TEAM</span></h1> */}
            <h1 className='about-title'>MEET THE TEAM</h1>
            <div className="credits">
                <div className='individual'>
                    <img src={judyImg} alt="Judy Chue"/>
                    <h4 className='names'>Judy Chue</h4>
                    <p className='person-info'>
                        Aspiring Full-stack web developer, with 30+ years experience as a Designer/<br></br>Art Director for Masstige/<br></br>Prestige consumer products.
                    </p>
                    <p className="person-links">Learn more about <span>Judy:</span><br/>
                        <a href="https://github.com/judychuepursuit" target="_blank" rel="noreferrer"> Github</a> and
                        <a href="https://www.linkedin.com/in/judy-chue/" target="_blank" rel="noreferrer"> LinkedIn</a>
                    </p>
                </div>

                <div className='individual'>
                    
                    
                    <h4 className='names'>Lakisha Johnson</h4>
                    <p className='person-info'>
                        Entry level computer programmer. I have a tenacious quest to acquire the knowledge and skills necessary to build a full-stack web application.
                    </p>
                    <p className="person-links">Learn more about <span>Kisha:</span><br/>
                        <a href="https://github.com/lakishaJohnson" target="_blank" rel="noreferrer"> Github</a> and
                        <a href="https://www.linkedin.com/in/lakisha-johnson-0b0587219/" target="_blank" rel="noreferrer"> LinkedIn</a>
                    </p>
                    <img src={kishaImg} alt="Lakisha Johnson"/> 
                </div>

                <div className='individual'>
                    <img src={ridwanImg} alt="MD Ridwan Robin"/>
                    <h4 className='names'>MD Ridwan Robin</h4>
                    <p className='person-info'>
                        Enrolled in Pursuit bootcamp, aspiring to become a Software Engineer.
                    </p>
                    <p className="person-links">Learn more about <span>Ridwan:</span><br/>
                        <a href="https://github.com/RK-404" target="_blank" rel="noreferrer"> Github</a> and
                        <a href="https://www.linkedin.com/in/mdridwanrobin/" target="_blank" rel="noreferrer"> LinkedIn</a>
                    </p>
                </div>

                <div className='individual'>
                    <h4 className='names'>Tshering Gurung</h4>
                    <p className='person-info'>
                        FSW Developer @ Pursuit - eager to apply my skills to help solve problems for the good of humanity.
                    </p>
                    <p className="person-links">Learn more about <span>Tee:</span><br/>
                        <a href="https://github.com/teegrg" target="_blank" rel="noreferrer"> Github</a> and
                        <a href="https://www.linkedin.com/in/tsheringgurungny/" target="_blank" rel="noreferrer"> LinkedIn</a>
                    </p><br/>
                    <img src={teeImg} alt="Tshering Gurung"/>
                </div>
            </div>
            <div className='project-description'>
                <h1 className='project-title'><span>YouTube</span><br/>Clone Project</h1>
                <p className='description'>
                <span><b>This is a React application</b></span> that lets you search for YouTube videos using the YouTube API, you then can choose a video from a list to watch.
                </p>
                <p className='description'>
                    <span><b>Team work:</b></span> This project <span>encouraged </span> and <span>taught</span> us to work as a <span>team.</span> The team had <span>open communication</span> and met on a regular basis to discuss the project.
                </p>
                <p className='description'>
                    <span><b>Resolving Merges and Conflicts </b> on git-hub and VS code:</span> The <span>team worked/learned together</span> on <span>resolving merge conflicts</span> and developed a troube-free seamless method to update files from git-hub by making a pull request.
                </p>
            </div>
        </div>
    );
}
  
export default AboutPage;
