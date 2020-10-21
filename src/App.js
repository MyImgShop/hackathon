import React from 'react';
import Footer  from './component/Footer'
import Boutons from './component/Boutons'


export default class App extends React.Component{

  render(){
    return(
      <div> 
        <Boutons/>
        <Footer />
      </div>
    )
  }
}