import React from 'react';

export default class Boutons extends React.Component {
    render() {
        return (
            <div className="boutonsCategories">
                <button className="bg-info text-white mx-2 pr-3 pl-3 p-2" name="paysage" >Paysages</button>
                <button className="bg-info text-white mx-2 pr-3 pl-3 p-2" name="villes">Villes</button>
                <button className="bg-info text-white mx-2 pr-3 pl-3 p-2" name="montagnes">Montagnes</button>
                <button className="bg-info text-white mx-2 pr-3 pl-3 p-2" name="plages">Plages</button>
                <button className="bg-info text-white mx-2 pr-3 pl-3 p-2" name="nourritures" >Nourritures</button>
                <button className="bg-info text-white mx-2 pr-3 pl-3 p-2" name="animaux">Animaux</button>
                <button className="bg-info text-white mx-2 pr-3 pl-3 p-2" name="voiture">Voitures</button>
                <button className="bg-info text-white mx-2 pr-3 pl-3 p-2" name="drapeau">Drapeau</button>
                <button className="bg-info text-white mx-2 pr-3 pl-3 p-2" name="tableau">Tableau Art</button>
                <button className="bg-info text-white mx-2 pr-3 pl-3 p-2" name="technologie">Technologies</button>
            </div>
        )
    }
}