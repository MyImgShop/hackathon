import React from 'react';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardImages from './components/cardImages/cardImagesPaysages';

export default class App extends React.Component {
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
              <CardImages />
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
              {/* Rajouter le Composant Panier ici */}
            </Route>
            <Route path="/contact">
              {/* Ancrage vers le footer */}
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