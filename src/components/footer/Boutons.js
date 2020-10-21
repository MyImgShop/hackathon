import React from 'react';

export default class Boutons extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center p-3">
                <button className="bg-dark text-white mx-2 border border-white"  name="paysage" >Paysage</button>
                <button className="bg-dark text-white mx-2 border border-white"  name="villes">Villes</button>        
                <button className="bg-dark text-white mx-2 border border-white"  name="montagnes">Montagne</button>        
                <button className="bg-dark text-white mx-2 border border-white"  name="plages">Plages</button>        
                <button className="bg-dark text-white mx-2 border border-white"  name="nourritures" >Nourritures</button>        
                <button className="bg-dark text-white mx-2 border border-white"  name="animaux">Animaux</button>        
                <button className="bg-dark text-white mx-2 border border-white"  name="voiture">Voiture</button>        
                <button className="bg-dark text-white mx-2 border border-white"  name="drapeau">Drapeau</button>        
                <button className="bg-dark text-white mx-2 border border-white"  name="tableau">Tableau Art</button>        
                <button className="bg-dark text-white mx-2 border border-white"  name="technologie">Technologie</button>
        
            </div>
        )   
    }
}