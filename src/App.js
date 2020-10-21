import React from 'react';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardImages from './components/cardImages/cardImagesPaysages';
import ImagesPlages from './components/imagesPlages/ImagesPlages'
import ImagesVilles from './components/imagesVilles/ImagesVilles'
import ImagesMontagnes from './components/imagesMontagnes/ImagesMontagnes'
import VoituresImages from './components/voitureImage/VoitureImage'
import Boutons from './components/boutons/Boutons.js'
import Contact from './components/contact/contact';
import Panier from "./components/panier/panier";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      class1: "d-none",
      class2: "d-none",
      class3: "d-none",
      class4: "d-none",
      class5: "d-none",
    }
  }
  affichePaysage = () => {
    let a = this.state
    a.class1 = "d-block"
    a.class2 = "d-none"
    a.class3 = "d-none"
    a.class4 = "d-none"
    a.class5 = "d-none"

    this.setState(a)
  }
  afficheVilles = () => {
    let b = this.state
    b.class1 = "d-none"
    b.class2 = "d-block"
    b.class3 = "d-none"
    b.class4 = "d-none"
    b.class5 = "d-none"
    this.setState(b)
  }
  afficheMontagne = () => {
    let g = this.state
    g.class1 = "d-none"
    g.class2 = "d-none"
    g.class3 = "d-block"
    g.class4 = "d-none"
    g.class5 = "d-none"
    this.setState(g)
  }
  affichePlage = () => {
    let h = this.state
    h.class1 = "d-none"
    h.class2 = "d-none"
    h.class3 = "d-none"
    h.class4 = "d-block"
    h.class5 = "d-none"
    this.setState(h)
  }
  afficheVoitures = () => {
    let e = this.state
    e.class1 = "d-none"
    e.class2 = "d-none"
    e.class3 = "d-none"
    e.class4 = "d-none"
    e.class5 = "d-block"
    this.setState(e)
  }
  render() {
    let video = "./video/blackspace.mp4"

    return (
      <div>
        <Router>
          <div id="mySidenav" className="sidenav">
            <Link to="/" id="about">ACCUEIL</Link>
            <Link to="/categories" id="blog">CATEGORIES</Link>
            <Link to="/panier" id="projects">PANIER</Link>
            <Link to="/contact" id="contact">CONTACT</Link>
          </div>
          <Switch>
            <Route path="/categories">
              <Boutons affichePaysage={() => this.affichePaysage()} afficheMontagne={() => this.afficheMontagne()} affichePlage={() => this.affichePlage()} afficheVilles={() => this.afficheVilles()} afficheVoitures={() => this.afficheVoitures()} />
              <CardImages class1={this.state.class1} />
              <ImagesVilles class2={this.state.class2} />
              <ImagesMontagnes class3={this.state.class3} />
              <ImagesPlages class4={this.state.class4} />
              <VoituresImages class5={this.state.class5} />
              <video autoPlay loop muted
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "400vh",
                  left: "50%",
                  top: "50%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-2"
                }}>
                <source src={video} type="video/mp4" />
              </video>
            </Route>
            <Route path="/panier">
              <Panier />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Navbar />
            </Route>
          </Switch>
        </Router>
        <video autoPlay loop muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: "50%",
            top: "50%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-2"
          }}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    )
  }
}