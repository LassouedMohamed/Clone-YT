import React, { Component } from 'react'

export default class Activite2 extends Component {
    render() {
       return (
           <div>
               <h1>Activite 3</h1>
                <div className='css-liste'>
                    <div className='css-objet'>
                    <input type="checkbox" id="scales" name="scales"/>
                    <label htmlFor="scales">Scales</label>
                    </div>

                    <div className='css-objet'>
                        <input type="checkbox" id="horns" name="horns"/>
                        <label htmlFor="horns">Horns</label>
                    </div>
                </div>
            </div>
        )
    }
}

