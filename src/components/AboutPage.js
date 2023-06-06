import './AboutPage.css';
import judyImg from './about-images/judy.png';
import kishaImg from './about-images/kisha.png';
import teeImg from './about-images/tee.png';
import ridwanImg from './about-images/ridwan.png';

function AboutPage() {
    return (
        <div className='about-page'>
            <h1 className='about-title'>MEET THE <span>TEAM</span></h1>
            <div className="credits">
                <div className='individual'>
                    <img src={judyImg} alt="Judy Chue"/>
                    <h3 className='names'>Judy Chue</h3>
                    <p className='person-info'>
                        Aspiring Full-stack web developer, with 30+ years experience as a Designer/Art Director for Masstige/Prestige consumer products.
                    </p>
                    <p>Learn more about Judy:<br/>
                        <a href="https://github.com/judychuepursuit" target="_blank" rel="noreferrer"> Github</a> and
                        <a href="https://www.linkedin.com/in/judy-chue/" target="_blank" rel="noreferrer"> LinkedIn</a>
                    </p>
                </div>

                <div className='individual'>
                    <h3 className='names'>Lakisha Johnson</h3>
                    <p className='person-info'>
                        Entry level computer programmer. I have a tenacious quest to acquire the knowledge and skills necessary to build a full-stack web application.
                    </p>
                    <p>Learn more about Kisha:<br/>
                        <a href="https://github.com/lakishaJohnson" target="_blank" rel="noreferrer"> Github</a> and
                        <a href="https://www.linkedin.com/in/lakisha-johnson-0b0587219/" target="_blank" rel="noreferrer"> LinkedIn</a>
                    </p>
                    <img src={kishaImg} alt="Lakisha Johnson"/> 
                </div>

                <div className='individual'>
                    <img src={ridwanImg} alt="MD Ridwan Robin"/>
                    <h3 className='names'>MD Ridwan Robin</h3>
                    <p className='person-info'>
                        Enrolled in Pursuit bootcamp, aspiring to become a Software Engineer.
                    </p>
                    <p>Learn more about Ridwan:<br/>
                        <a href="https://github.com/RK-404" target="_blank" rel="noreferrer"> Github</a> and
                        <a href="https://www.linkedin.com/in/mdridwanrobin/" target="_blank" rel="noreferrer"> LinkedIn</a>
                    </p>
                </div>

                <div className='individual'>
                    <h3 className='names'>Tshering Gurung</h3>
                    <p className='person-info'>
                        FSW Developer @ Pursuit - eager to apply the my skills to help solve problems for the good of humanity.
                    </p>
                    <p>Learn more about Tee:<br/>
                        <a href="https://github.com/teegrg" target="_blank" rel="noreferrer"> Github</a> and
                        <a href="https://www.linkedin.com/in/tsheringgurungny/" target="_blank" rel="noreferrer"> LinkedIn</a>
                    </p>
                    <img src={teeImg} alt="Tshering Gurung"/>
                </div>
            </div>
            <div className='project-description'>
                <h1 className='project-title'><span>YouTube</span><br/>Clone Project</h1>
                <p className='description'>
                    This is a React application that lets you search for YouTube videos using the YouTube API, you then can choose a video from a list to watch.
                </p>
                <p className='description'>
                    Team work: This project encouraged and taught us to work as a team. The team had open communication and met on a regular basis to discuss the project.
                </p>
                <p className='description'>
                    Resolving Merges and Conflicts on git-hub and VS code: The team learned together how to resolve merge conflicts and for the team members to have the most current from the main repo files on git-hub.
                </p>
            </div>
        </div>
    );
}
  
  export default AboutPage;
