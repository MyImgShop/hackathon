import React from 'react';

export default class Boutons extends React.Component {
    render() {
        return (
            <div>
                <div className="boutonsCategories">
                    <button className="bg-info text-white mx-2 pr-3 pl-3 p-2 mr-3" name="paysage" onClick={this.props.affichePaysage}>Paysages</button>
                    <button className="bg-info text-white mx-2 pr-3 pl-3 p-2 mr-3" name="villes" onClick={this.props.afficheVilles}>Villes</button>
                    <button className="bg-info text-white mx-2 pr-3 pl-3 p-2 mr-3" name="montagnes" onClick={this.props.afficheMontagne}>Montagnes</button>
                    <button className="bg-info text-white mx-2 pr-3 pl-3 p-2 mr-3" name="plages" onClick={this.props.affichePlage}>Plages</button>
                    <button className="bg-info text-white mx-2 pr-3 pl-3 p-2 mr-3" name="voiture" onClick={this.props.afficheVoitures}>Voitures</button>
                </div>
            </div>
        )
    }
}