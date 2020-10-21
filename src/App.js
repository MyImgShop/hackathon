import React from 'react';
import Boutons from './components/footer/Boutons'
import CardImages from './components/cardImages/cardImages';
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
  afficheNourriture = () => {
    let i = this.state
    i.class1  = "d-none"
    i.class2 = "d-none"
    i.class3 = "d-none"
    i.class4 = "d-none"
    i.class5 = "d-block"
    i.class6 = "d-none"
    i.class7 = "d-none"
    i.class8 = "d-none"
    i.class9 = "d-none"
    i.class10 = "d-none"
    this.setState(i)
  }
  afficheAnimaux = () => {
    let j = this.state
    j.class1  = "d-none"
    j.class2 = "d-none"
    j.class3 = "d-none"
    j.class4 = "d-none"
    j.class5 = "d-none"
    j.class6 = "d-block"
    j.class7 = "d-none"
    j.class8 = "d-none"
    j.class9 = "d-none"
    j.class10 = "d-none"
    this.setState(j)
  }
  afficheVoitures = () => {
    let e = this.state
    e.class1  = "d-none"
    e.class2 = "d-none"
    e.class3 = "d-bnone"
    e.class4 = "d-none"
    e.class5 = "d-none"
    e.class6 = "d-none"
    e.class7 = "d-block"
    e.class8 = "d-none"
    e.class9 = "d-none"
    e.class10 = "d-none"
    this.setState(e)
  }
  afficheDrapeau = () => {
    let d = this.state
    d.class1  = "d-none"
    d.class2 = "d-none"
    d.class3 = "d-none"
    d.class4 = "d-none"
    d.class5 = "d-none"
    d.class6 = "d-none"
    d.class7 = "d-none"
    d.class8 = "d-block"
    d.class9 = "d-none"
    d.class10 = "d-none"
    this.setState(d)
  }
  afficheTableau = () => {
    let c = this.state
    c.class1  = "d-none"
    c.class2 = "d-none"
    c.class3 = "d-none"
    c.class4 = "d-none"
    c.class5 = "d-none"
    c.class6 = "d-none"
    c.class7 = "d-none"
    c.class8 = "d-none"
    c.class9 = "d-block"
    c.class10 = "d-none"
    this.setState(c)
  }
  afficheTechnologie = () => {
    let f = this.state
    f.class1  = "d-none"
    f.class2 = "d-none"
    f.class3 = "d-none"
    f.class4 = "d-none"
    f.class5 = "d-none"
    f.class6 = "d-none"
    f.class7 = "d-none"
    f.class8 = "d-none"
    f.class9 = "d-none"
    f.class10 = "d-block"
    this.setState(f)
  }

  render(){
    return(
      <div> 
        <Boutons affichePaysage={() => this.affichePaysage()} afficheVilles={() => this.afficheVilles()} afficheMontagne={() => this.afficheMontagne()} affichePlage={() => this.affichePlage()} afficheNourriture={() => this.afficheNourriture()} afficheVoitures={() => this.afficheVoitures()}  afficheDrapeau={() => this.afficheDrapeau()} afficheTechnologie={() => this.afficheTechnologie()} afficheTableau={() => this.afficheTableau() }  afficheAnimaux={() => this.afficheAnimaux()} />
        <CardImages class1={this.state.class1} class2={this.state.class2} class3={this.state.class3} class4={this.state.class4} class5={this.state.class5} class6={this.state.class6} class7={this.state.class7} class8={this.state.class8}  class9={this.state.class9} class10={this.state.class10}  />
        <Footer />
      </div>
    )
  }
}