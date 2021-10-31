import React, { Component } from 'react'

export default class Exercice extends Component {
    render() {
        return (    
            <div className="contact-card">
                    <img src={this.props.img}/>
                    <h3>{this.props.nom}</h3>
                    <p>Phone : {this.props.tel}</p>
                    <p>Email :{this.props.email}</p>
            </div>
        )
    }
}
