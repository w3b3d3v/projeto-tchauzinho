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

        <strong>
        Me mande um 👋 pela Blockchain.
        </strong>

        <button className="callButton" onClick={call}>
          <h2>👋 Olá!</h2>
        </button>
      </div>
    </div>
  );
}
