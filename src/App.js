import React from 'react';
import Boutons from './components/footer/Boutons'
import CardImages from './components/cardImages/cardImages';
import Footer  from './components/footer/Footer'


export default class App extends React.Component{

  render(){
    return(
      <div> 
        <Boutons/>
        <CardImages />
        <Footer />
      </div>
    )
  }
}