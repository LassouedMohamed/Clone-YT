import React, { Component } from 'react';

class Liste extends Component {
    
    render() {
        const liste=[{
            id :"01",
            nom :"mohamed tounsi",
            email:"mohamed@gmail.com",
            num:"22-555-163",
          },
          {
            id :"02",
            nom :" foulen ben foulen",
            email:"foulen@gmail.com",
            num:"55-555-106",
          }];
        const mapf = liste.map((n) => <li>{n.id} <br/> {n.nom}<br/> {n.email}<br/>{n.num}</li> )
        const it =<ul>  {mapf} </ul>
          
              
        return (
            <ol>
                <ul>
                {it}
                </ul>
            </ol>
        );
    }
}

export default Liste;
