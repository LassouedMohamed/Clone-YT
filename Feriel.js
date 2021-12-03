import React from 'react'
import ReactPlayer from 'react-player'
import './MainArea.css'
import VidyardPlayer from 'react-Video-js-player'
function Feriel(){
return(
    
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
   
)
}
export default Feriel