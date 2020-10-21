import React from 'react';

export default class Footer extends React.Component{
    render(){
        return(
            <div className="d-flex flex-column">
                <div className="row pr-0">
                    <div className=" col-4 p-2 bg-dark text-white">
                        <p className="py-2 ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae provident fugiat expedita minima, ullam fugit ipsam rerum laborum dolor quaerat. Quidem id enim quisquam vel!</p>
                    </div>
                    <div className="col-4 py-2 bg-dark text-white text-center">
                        <p>Contact</p>
                        <p>FAQ</p>
                        <a href="###" className="text-white">Back to top</a>
                    </div>
                    {/* span juste visuelle avec les categories */}
                    <div className="col-4 py-2 px-0 bg-dark text-white d-flex flex-wrap">
                       <span className="my-2 mx-3 py-1 border border-white rounded-pill">Paysage</span>
                       <span className="my-2 mx-3 py-1 border border-white rounded-pill">Villes</span>
                       <span className="my-2 mx-3 py-1 border border-white rounded-pill">Montagnes</span>
                       <span className="my-2 mx-3 py-1 border border-white rounded-pill">Plages</span>
                       <span className="my-2 mx-3 py-1 border border-white rounded-pill">Nourritures</span>
                       <span className="my-2 mx-3 py-1 border border-white rounded-pill">Animaux</span>
                       <span className="my-2 mx-3 py-1 border border-white rounded-pill">Voiture</span>
                       <span className="my-2 mx-3 py-1 border border-white rounded-pill">Drapeau</span>
                       <span className="my-2 mx-3 py-1 border border-white rounded-pill">Tableau Art</span>
                       <span className="my-2 mx-3 py-1 border border-white rounded-pill">Technologie</span>
                    </div>
                </div>
                <p className="bg-danger col-12 mb-0 text-center"> &copy;Mouad, &copy;Karis, &copy;Liam </p>
            </div>
        )   
    }
}
