import React from 'react';

export default class Boutons extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center p-3">
                <button className="bg-dark text-white mx-2 border border-white" onClick={this.props.afficher} name="paysage" >Paysage</button>
                <button className="bg-dark text-white mx-2 border border-white" onClick={this.props.afficher} name="villes">Villes</button>        
                <button className="bg-dark text-white mx-2 border border-white" onClick={this.props.afficher} name="montagnes">Montagne</button>        
                <button className="bg-dark text-white mx-2 border border-white" onClick={this.props.afficher} name="plages">Plages</button>        
                <button className="bg-dark text-white mx-2 border border-white" onClick={this.props.afficher} name="nourritures" >Nourritures</button>        
                <button className="bg-dark text-white mx-2 border border-white" onClick={this.props.afficher} name="animaux">Animaux</button>        
                <button className="bg-dark text-white mx-2 border border-white" onClick={this.props.afficher} name="voiture">Voiture</button>        
                <button className="bg-dark text-white mx-2 border border-white" onClick={this.props.afficher} name="drapeau">Drapeau</button>        
                <button className="bg-dark text-white mx-2 border border-white" onClick={this.props.afficher} name="tableau">Tableau Art</button>        
                <button className="bg-dark text-white mx-2 border border-white" onClick={this.props.afficher} name="technologie">Technologie</button>
        
            </div>
        )   
    }
}