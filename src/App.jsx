import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        🖖 Hi Everyone!
        </div>

        <div className="bio">
        I'm a Software Engineer and I'm studing Web3 developments? Conect your Ethereum wallet and click on 'May The Force Be With You'!
        </div>

        <button className="waveButton" onClick={wave}>
          May The Force Be With You 🔌
        </button>
      </div>
    </div>
  );
}
