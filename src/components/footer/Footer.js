import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="d-flex flex-column">
                <div className="row">
                    <div className="col-4 p-3 bg-dark text-white">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae provident fugiat expedita minima, ullam fugit ipsam rerum laborum dolor quaerat. Quidem id enim quisquam vel!</p>
                    </div>
                    <div className="col-4 p-3 bg-dark text-white text-center">
                        <p>Contact</p>
                        <p>FAQ</p>
                        <a href="###" className="text-white">Back to top</a>
                    </div>
                    {/* badge juste visuelle avec les categories */}
                    <div className="col-4 p-3 bg-dark text-white d-flex flex-wrap">
                       <badge className="my-2 mx-2 p-1 border border-white rounded-pill">Paysage</badge>
                       <badge className="my-2 mx-2 p-1 border border-white rounded-pill">Villes</badge>
                       <badge className="my-2 mx-2 p-1 border border-white rounded-pill">Montagnes</badge>
                       <badge className="my-2 mx-2 p-1 border border-white rounded-pill">Plages</badge>
                       <badge className="my-2 mx-2 p-1 border border-white rounded-pill">Nourritures</badge>
                       <badge className="my-2 mx-2 p-1 border border-white rounded-pill">Animaux</badge>
                       <badge className="my-2 mx-2 p-1 border border-white rounded-pill">Voiture</badge>
                       <badge className="my-2 mx-2 p-1 border border-white rounded-pill">Drapeau</badge>
                       <badge className="my-2 mx-2 p-1 border border-white rounded-pill">Tableau Art</badge>
                       <badge className="my-2 mx-2 p-1 border border-white rounded-pill">Technologie</badge>
                    </div>
                </div>
                <p className="bg-danger col-12 text-center"> &copy;Mouad, &copy;Karis, &copy;Liam </p>
            </div>
        )   
    }
}
