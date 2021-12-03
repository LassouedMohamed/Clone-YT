import { render } from '@testing-library/react'
import React from 'react'
import ReactPlayer from 'react-player'
import './MainArea.css'

function Main(){
    return (<div className="Main">
    <div className="Videos">
    <div className="Video">
          <ReactPlayer 
                url="./feriel.mp4"
                height="170px"
                width="260px"
                controls/>
                <br></br>
               <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
           <div>Projet Gestion d'avions d'un aéroport</div>
    </div>
    <br></br>
    <div className="view">
     2 720 vues 25 sept. 2020
    </div>
    </div>
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=lGgsWdxgRtI"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>How to Make an AMAZON Clone with REACT JS </div>
            </div>
            <br></br>
            <div className="view">
            720 vues 27 mars. 2021
            </div>
        </div>
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=VwnTBYTNn14"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>Install React Package Easily 100% REACT JS Beginners</div>
            </div>
            <br></br>
            <div className="view">
            45 vues 26 févr. 2021
            </div>
        </div>
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=iiUQy1Az4v8"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>Microsoft UI for beginner REACT JS for Beginners</div>
            </div>
            <br></br>
            <div className="view">
            103 vues 27 déc. 2020
            </div>
        </div>
    </div>
    <div className="Videoss">
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=SaK0tFwjGv0"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>Let's Build a YouTube Clone with REACT JS Beginners</div>
            </div>
            <br></br>
            <div className="view">
            2 720 vues 25 sept. 2020
            </div>
        </div>
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=lGgsWdxgRtI"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>How to Make an AMAZON Clone with REACT JS </div>
            </div>
            <br></br>
            <div className="view">
            720 vues 27 mars. 2021
            </div>
        </div>
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=VwnTBYTNn14"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>Install React Package Easily 100% REACT JS Beginners</div>
            </div>
            <br></br>
            <div className="view">
            45 vues 26 févr. 2021
            </div>
        </div>
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=iiUQy1Az4v8"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>Microsoft UI for beginner REACT JS for Beginners</div>
            </div>
            <br></br>
            <div className="view">
            103 vues 27 déc. 2020
            </div>
        </div>
    </div>
    <div className="Videoss">
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=SaK0tFwjGv0"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>Let's Build a YouTube Clone with REACT JS Beginners</div>
            </div>
            <br></br>
            <div className="view">
            2 720 vues 25 sept. 2020
            </div>
        </div>
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=lGgsWdxgRtI"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>How to Make an AMAZON Clone with REACT JS </div>
            </div>
            <br></br>
            <div className="view">
            720 vues 27 mars. 2021
            </div>
        </div>
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=VwnTBYTNn14"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>Install React Package Easily 100% REACT JS Beginners</div>
            </div>
            <br></br>
            <div className="view">
            45 vues 26 févr. 2021
            </div>
        </div>
        <div className="Video">
            <ReactPlayer 
            url="https://www.youtube.com/watch?v=iiUQy1Az4v8"
            height="170px"
            width="260px"
            controls/>
            <br></br>
            <div className="Logo">
              <img src="/images/ReactJS.png" alt="React" style={{height:"35px",width:"35px",borderRadius:"50%"}}/>
              <div>Microsoft UI for beginner REACT JS for Beginners</div>
            </div>
            <br></br>
            <div className="view">
            103 vues 27 déc. 2020
            </div>
        </div>
    </div>

</div>)
}
export default Main;


