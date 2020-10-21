import React from 'react';
import Boutons from './components/footer/Boutons'
import CardImages from './components/cardImages/cardImages';
import VoitureImage from './components/voitureImage/VoitureImage'
import ImagesVilles from './components/imagesVilles/ImagesVilles'
import ImagesMontagnes from './components/imagesMontagnes/ImagesMontagnes'
import ImagesPlages from './components/imagesPlages/ImagesPlages'
import Footer  from './components/footer/Footer'


export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      class1 : "d-none",
      class2 : "d-none",
      class3 : "d-none",
      class4 : "d-none",
      class5 : "d-none",
      class6 : "d-none",
      class7 : "d-none",
      class8 : "d-none",
      class9 : "d-none",
      class10 : "d-none",
      totalPanier : 0
    }
  }
  affichePaysage = () => {
    let a = this.state
    a.class1 = "d-block"
    a.class2  = "d-none"
    a.class3 = "d-none"
    a.class4 = "d-none"
    a.class5 = "d-none"
    a.class6 = "d-none"
    a.class7 = "d-none"
    a.class8 = "d-none"
    a.class9 = "d-none"
    a.class10 = "d-none"
    this.setState(a)
  }
  afficheVilles = () => {
    let b = this.state
    b.class1  = "d-none"
    b.class2 = "d-block"
    b.class3 = "d-none"
    b.class4 = "d-none"
    b.class5 = "d-none"
    b.class6 = "d-none"
    b.class7 = "d-none"
    b.class8 = "d-none"
    b.class9 = "d-none"
    b.class10 = "d-none"
    this.setState(b)
  }
  afficheMontagne = () => {
    let g = this.state
    g.class1  = "d-none"
    g.class2 = "d-none"
    g.class3 = "d-block"
    g.class4 = "d-none"
    g.class5 = "d-none"
    g.class6 = "d-none"
    g.class7 = "d-none"
    g.class8 = "d-none"
    g.class9 = "d-none"
    g.class10 = "d-none"
    this.setState(g)
  }
  affichePlage= () => {
    let h = this.state
    h.class1  = "d-none"
    h.class2 = "d-none"
    h.class3 = "d-none"
    h.class4 = "d-block"
    h.class5 = "d-none"
    h.class6 = "d-none"
    h.class7 = "d-none"
    h.class8 = "d-none"
    h.class9 = "d-none"
    h.class10 = "d-none"
    this.setState(h)
  }
  afficheVoitures = () => {
    let e = this.state
    e.class1 = "d-none"
    e.class2 = "d-none"
    e.class3 = "d-none"
    e.class4 = "d-none"
    e.class5 = "d-none"
    e.class6 = "d-none"
    e.class7 = "d-block"
    e.class8 = "d-none"
    e.class9 = "d-none"
    e.class10 = "d-none"
    this.setState(e)
  }
  ajouterPanier = () => {
    let z = this.state 
    z.totalPanier += 19.99
    this.setState(z)
  }
  render(){
    return(
      <div> 
        <Boutons affichePaysage={() => this.affichePaysage()} afficheVilles={() => this.afficheVilles()} afficheMontagne={() => this.afficheMontagne()} affichePlage={() => this.affichePlage()} afficheVoitures={() => this.afficheVoitures()}  />
        <CardImages class1={this.state.class1}  />
        <VoitureImage class7={this.state.class7}  />
        <ImagesVilles class2={this.state.class2} />
        <ImagesMontagnes class3={this.state.class3} />
        <ImagesPlages class4={this.state.class4} />
        <Footer />
      </div>
    )
  }
}