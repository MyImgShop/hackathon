import React from 'react';
import CardImages from './components/cardImages/cardImages';
import Footer  from './components/footer/Footer'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CardImages />
        <Footer />
      </div>
    )
  }
}