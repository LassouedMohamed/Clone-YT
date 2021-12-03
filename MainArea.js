import React from 'react'
import './MainArea.css'

import { useState } from 'react';
import Feriel from './Feriel';
import Main from './Main';
import Lassoued from './lassoued';
import Team from './Team';

function MainArea(){
    const [feriel,setferiel]=useState(false) 
    const showfer=()=>{
      setferiel(ferr=>!ferr)
    }
    const [lassoued,setlassoued]=useState(false)
    const showlass=()=>{
        setlassoued(lass=>!lass)
    }
    const [team,setteam]=useState(false)
    const showteam=()=>{
        setteam(team=>!team)
    }
    return(
        <div className="MainArea">
            <div className="Sidebar">
                <div className="Home">
                    <div className="Quick_Icon">
                    <img src={require("./Mdm/MdHome.png").default} width="45px" height="45px"/>
                    <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                    <img src={require("./Mdm/MdGripFire.png").default} width="45px" height="45px"/>
                    <div>Trending</div>
                    </div>
                    <div className="Quick_Icon">
                    <img src={require("./Mdm/FillCollectionPlayFill.png").default} width="45px" height="45px"/>
                    <div>Subscriptions</div>
                    </div>
                </div>
                <div className="Library">
                <div className="Quick_Icon">
                    <img src={require("./Mdm/team.png").default} width="45px" height="45px"/>
                    <div><button onClick={showlass}>Team</button></div>   
                </div>
                <div className="Quick_Icon">
                    <img src={require("./Mdm/VideoLibrary.png").default} width="45px" height="45px"/>
                    <div><button onClick={showlass}>Feriel</button></div>
                </div>
                <div className="Quick_Icon">
                    <img src={require("./Mdm/History.png").default} width="45px" height="45px"/>
                    <div><button onClick={showlass}>Rihem</button></div>
                </div>
                <div className="Quick_Icon">
                    <img src={require("./Mdm/WatchLater.png").default} width="45px" height="45px"/>
                    <div><button onClick={showlass}>Lassoued</button></div>
                </div>
                <div className="Quick_Icon">
                    <img src={require("./Mdm/PlayListPlay.png").default} width="45px" height="45px"/>
                    <div><button onClick={showlass}>Oumaima</button></div>
                </div>
                
                </div>
                <div className="More_From_Youtube">
                <div className="Quick_Icon">
                    <img src={require("./Mdm/GamePad.png").default} width="45px" height="45px"/>
                    <div><button onClick={showlass}>Chaima</button></div>
                </div>
                <div className="Quick_Icon">
                    <img src={require("./Mdm/RssFeed.png").default} width="45px" height="45px"/>
                    <div>Live</div>
                </div>
                <div className="Quick_Icon">
                    <img src={require("./Mdm/Futbol.png").default} width="45px" height="45px"/>
                    <div>Sports</div>
                </div>
                <div className="Quick_Icon">
                    <img src={require("./Mdm/Music.png").default} width="45px" height="45px"/>
                    <div>Musics</div>
                </div>
                <div className="Quick_Icon">
                    <img src={require("./Mdm/Newspaper.png").default} width="45px" height="45px"/>
                    <div>News</div>
                </div>
                </div>
            </div>
            
            {team?<Team></Team>:feriel?<Feriel></Feriel>:lassoued?<Lassoued></Lassoued>:<Main></Main>}
         
        </div>
    )
}
 export default MainArea 