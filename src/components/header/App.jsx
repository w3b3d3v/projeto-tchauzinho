import { callCounterContract } from "../../services/CallCounter"
import React, { useState } from "react";
import './App.css';

export default function App() {
  const [userAddress, setUserAddress] = useState("")

  const connectWallet = async () => {
    const listUserAddress =  await window.ethereum.request({method: "eth_requestAccounts"})
    console.info(`✅ Wallet ${listUserAddress[0]} connected!`)
    setUserAddress(listUserAddress[0])
  }

  return (
    <div className="headerMainContainer">

      <div className="headerDataContainer">
        <div className="header">
        🌎 Olá Mundo!
        </div>

        <h3 className="bio">
        Eu sou <a className="link" target="_blank" href="https://linkedin.com/in/olivmath">
          Lucas Oliveira
        </a>!
        </h3><br/>

        <div className="describe">
        Me mande um 👋 pela Blockchain.
        </div>

        {
          !userAddress &&
          <button className="callButton" onClick={connectWallet}>
            <div className="describe">🦊 Connectar sua carteira</div>
          </button>
        }

        <button className="callButton" onClick={
          async () => await callCounterContract.call({ gasLimit: 300000 })
        }>
          <h2>👋 Olá!</h2>
        </button>
      </div>
    </div>
  );
}
