import React, { Component } from 'react'

export default class Star extends Component {
    constructor(props){
        super(props)
        this.state ={
            on : false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
            let t = this.state.on ? false : true
        this.setState({
            on : t
        })
    }
    render() {
        return (
                <img className='Star' src={this.state.on ? process.env.PUBLIC_URL + './star_on.png' : process.env.PUBLIC_URL + './star_off.png'} onClick ={this.handleClick} />
        )
    }
}
