import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const call = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        🌎 Olá Mundo!
        </div>

        <h3 className="bio">
        Eu sou Lucas Oliveira!
        </h3><br/>

        <p>
        Clicando a baixo vc me chama pela Blockchain.
        </p>

        <button className="callButton" onClick={call}>
          <h1>👋 Salve!</h1>
        </button>
      </div>
    </div>
  );
}
