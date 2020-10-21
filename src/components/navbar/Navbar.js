import React from 'react';

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            jour: 1,
            heure: 13,
            minute: 49,
            seconde: 25,
        }
    }

    anis = () => {
        let x = this.state;
        if (x.seconde > 0) {
            x.seconde -= 1;
        } else if (x.seconde === 0) {
            x.seconde = 59;
            if (x.minute > 0) {
                x.minute -= 1;
            } else if (x.minute === 0) {
                x.minute = 59;
                if (x.heure > 0) {
                    x.heure -= 1
                } else if (x.heure === 0) {
                    x.heure = 23
                    if (x.jour > 0) {
                        x.jour -= 1;
                    } else if (x.jour === 0 && x.heure === 0 && x.minute === 0 && x.seconde === 0) {
                        x.jour = 0
                        x.heure = 0
                        x.minute = 0
                        x.seconde = 0
                    }
                }
            }
        }
        this.setState(x);
    }

    componentDidMount() {
        this.xID = setInterval(
            () => {
                this.anis()
            }, 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.xID)
    }

    render() {
        return (
            <header>
                <div className="pos-f-t" >
                    <div className="collapse" id="navbarToggleExternalContent"  >
                        <div className="promocompte " >
                            <section className="container text-center" >
                                <div className="souligne">
                                    <h1>NOS <span className="text-danger"> PROMOS </span></h1>
                                    <h2>TOUT A -50% DANS :</h2>
                                </div>
                                <div className="row d-flex align-items-center pt-5">
                                    <div className="col-3">
                                        <h1>Jours.</h1>
                                        <h2 className="display-1">{this.state.jour}</h2>
                                    </div>

                                    <div className="col-3">
                                        <h1>Heures.</h1>
                                        <h2 className="display-1">{this.state.heure}</h2>
                                    </div>

                                    <div className="col-3">
                                        <h1>Minutes.</h1>
                                        <h2 className="display-1">{this.state.minute}</h2>
                                    </div>

                                    <div className="col-3">
                                        <h1>Secondes.</h1>
                                        <h2 className="display-1">{this.state.seconde}</h2>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <nav className="navbar navbar-dark p-0 ">
                        <div className="ml-5">
                            <h3 className="titresitenav text-light">My<span className="titrecolor">Shop</span>.</h3>
                        </div>

                        <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <img className="imgpromo img-fluid" src="./img/promo.png" alt="" />
                    </nav>
                </div>

                <h4 className="text-white titresite ">My<span className="titrecolor">Shop</span>.</h4>
                <p className=" text text-light text-center">Votre <span className="titrecolor">cite</span> d'achat <span className="titrecolor">d'images</span> à plus <span className="text-danger">bas</span>  prix.</p>
                <img className="imgacc" src="./img/robot.gif" alt="" />
            </header>
        )
    }
}