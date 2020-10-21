import React from 'react';

export default class Boutons extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center p-3">
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.affichePaysage} name="paysage" >Paysage</button>
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheVilles} name="villes">Villes</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheMontagne} name="montagnes">Montagne</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.affichePlage} name="plages">Plages</button>        
                <button className="bg-dark text-white mx-2 border border-white"  onClick={this.props.afficheVoitures} name="voiture">Voiture</button>        

            </div>
        )   
    }
}