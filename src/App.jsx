import React, { useState, useEffect } from "react";
import abi from "./utils/CallCounter.json"
import { ethers } from "ethers";
import './App.css';


const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const provider = new ethers.providers.Web3Provider(window.ethereum)
const contractABI = abi.abi
export const callCounterContract = new ethers.Contract(contractAddress, contractABI, provider.getSigner());


export default function App() {
  const [userAddress, setUserAddress] = useState("")

  const connectWallet = async () => {
    const listUserAddress =  await window.ethereum.request({method: "eth_requestAccounts"})
    console.info(`✅ Wallet ${listUserAddress[0]} connected!`)
    setUserAddress(listUserAddress[0])
  }

  const call = async () => {
    await callCounterContract.call({ gasLimit: 300000 })
  }


  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        🌎 Olá Mundo!
        </div>

        <h3 className="bio">
        Eu sou <a className="link" target="_blank" href="https://linkedin.com/in/olivmath">Lucas Oliveira</a>!
        </h3><br/>

          <strong className="describe">
        Me mande um 👋 pela Blockchain.
        </strong>

        {
          !userAddress &&
          <button className="callButton" onClick={connectWallet}>
            <strong>🦊 Connectar sua carteira</strong>
          </button>
        }

        <button className="callButton" onClick={call}>
          <h2>👋 Olá!</h2>
        </button>
      </div>
    </div>
  );
}
