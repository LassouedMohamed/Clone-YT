import React, { Component } from 'react'

export default class Activite2 extends Component {
    render() {
        const d = new Date();
        let hour = d.getHours();
        let msg = (hour<12) ? (<h3 style={{color:'#04567F'}}>Bonjour</h3>) : (hour<18) ?(<h3 style={{color:'#0914A3'}}>Bonne après midi</h3>) :(<h3 style={{color:'#D90000'}}>Bonsoir</h3>) ;
        return (
            <div>
                <h1>activite 2 </h1>
                {msg}
            </div>
        )
    }
}

