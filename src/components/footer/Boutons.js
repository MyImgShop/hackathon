import React from 'react';

export default class Boutons extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center p-3">
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.affichePaysage} name="paysage" >Paysage</button>
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheVilles} name="villes">Villes</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheMontagne} name="montagnes">Montagne</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.affichePlages} name="plages">Plages</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheNourritures} name="nourritures" >Nourritures</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheAnimaux} name="animaux">Animaux</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheVoiture} name="voiture">Voiture</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheDrapeau} name="drapeau">Drapeau</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheTableau} name="tableau">Tableau Art</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheTechnologie} name="technologie">Technologie</button>
        
            </div>
        )   
    }
}