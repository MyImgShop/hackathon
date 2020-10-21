import React from 'react';
import Boutons from './components/boutons/Boutons'
import CardImages from './components/cardImages/cardImagesPaysages';
import Footer from './components/footer/Footer'

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Boutons />
        <CardImages />
        <Footer />
      </div>
    )
  }
}