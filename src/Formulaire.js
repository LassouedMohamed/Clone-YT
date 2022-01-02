import React, { Component } from 'react';

class Formulaire extends Component {

    constructor(props){
        super(props)
        this.state={
             nomcomplet: " ",
             check : " ",
             comm : " "
        };
    }
    handelchange=(e)=>{
     this.setState({nomcomplet:e.target.value})
    }
    handleChangement=(e)=>{
        this.setState({check: e.target.value})
    }
    handelchangem =(e)=>{
        this.setState({comm: e.target.value})
    }
    envoiform=()=>{
        alert("Nom: "+this.state.nomcomplet +" \nSaveur : "+ this.state.check +"\nCommentaire: "+ this.state.comm)
         
    }               

    render() {
        console.log(this.state.check)
        return (
            <div className="form">
                <label id="nom">Nom complet: </label>
                
                <input type="text" id="nomc" onChange={this.handelchange}  value={this.state.nomcomplet} placeholder="Nomcomplet"/>
                {/* <button type="submit" onClick={this.submitForm} >Afficher</button>
                <p>{this.state.nomcomplet}</p> */}
                <br/>
                <label id="saveur">Choisissez votre saveur préférée: </label>
               
                <select name="saveurs" value={this.state.check} onChange={this.handleChangement}>
                    <option value="vide">Choisissez une option</option>
                    <option value="pamplemousse">pamplemousse</option>
                    <option value="Noix de coco">noix de coucou</option>
                    <option value="Mangue">Mangue</option>
                    
                </select>
                <br/>
                <label>Commentaire: </label>
                <textarea value={this.state.comm} onChange={this.handelchangem}></textarea>
                <br/>
                <button type="submit" value="Envoyer" onClick={this.envoiform}> Envoyer</button>
            </div>
        );
    }
}

export default Formulaire;
