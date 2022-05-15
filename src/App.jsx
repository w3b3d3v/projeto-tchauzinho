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
        Olá meu nome é Lucas Oliveira!
        </h3><br/>

        <p>
        Clicando a baixo vc me chamar pela Blockchain.
        </p>

        <button className="callButton" onClick={call}>
          👋 Salve!
        </button>
      </div>
    </div>
  );
}
