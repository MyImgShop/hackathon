import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div className="col-4 infos">
                        <h5>MYSHOP</h5>
                        <p>MYSHOP est un site qui permet d'acheter
                            des photos de haute qualité.<br /><br />
                            Boutique d'images en ligne.</p>
                    </div>
                    <div className="col-4 links">
                        <h5>LINKS</h5>
                        <a href="###">Accueil</a>
                        <a href="###">Categories</a>
                        <a href="###">Panier</a>
                        <a href="###">Contact</a>
                    </div>
                    <div className="col-4">
                        <h5>TAGS</h5>
                        <button>Paysages</button><button>Villes</button><button>Montagnes</button><br />
                        <button>Plages</button><button>Nourritures</button><button>Animaux</button><br />
                        <button>Voitures</button><button>Drapeau</button><button>Tableau Art</button>
                        <button>Technologies</button>
                    </div>
                </div>
                <p className="col-12 m-0 bg-danger p-3 text-white text-center">&copy; Karis &copy; Liam &copy; Mouad</p>
            </div>
        )
    }
}
