import React, { Component } from 'react'

export default class Activite1 extends Component {
    render() {
        const d = new Date();
        let hour = d.getHours();
        let msg = (hour<12) ? (<h3>Bonjour</h3>) : (hour<18) ?(<h3>Bonne après midi</h3>) :(<h3>Bonsoir</h3>) ;
        return (
            <div>
                <h1>activite 1</h1>
                {msg}
            </div>
        )
    }
}

