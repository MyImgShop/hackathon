import React from 'react';
import Navbar from './component/acceuil/Navbar.js';
export default class App extends React.Component{
  render(){
    let video = "./video/blackspace.mp4"

    return(
      <div>
        <video autoPlay loop muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-2"
        }}>
          <source src={video} type="video/mp4"/>
        </video>
        <Navbar />
      </div>
    )
  }
}