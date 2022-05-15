import React, { useState, useEffect } from "react";
import { ContractFactory, ethers } from "ethers";
import './App.css';
import abi from "./utils/CallCounter.json"


const contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
const provider = new ethers.providers.Web3Provider(window.ethereum)
const contractABI = abi.abi
const callCounterContract = new ethers.Contract(contractAddress, contractABI, provider.getSigner());


export const totalCalls = async () => {
  let calls = await callCounterContract.getCalls()
  let callers = await callCounterContract.getCallers()

  console.log(`Called me ${calls.toNumber()} times`)
  console.log("List of callers")
  callers.map(caller => console.log(caller))
}


export default function App() {
  const [userAddress, setUserAddress] = useState("")
  const [allCalls, setAllCalls] = useState([]);
  useEffect(() => {
    const newCall = (caller, indexCall) => {
      console.log(`${indexCall} - ${caller} call me !`)
    }


    callCounterContract.on("newCall", newCall);

    return () => {
      if (callCounterContract) {
        callCounterContract.off("newCall", newCall);
      }
    };
  }, []);

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
        Eu sou Lucas Oliveira!
        </h3><br/>

        <strong>
        Me mande um 👋 pela Blockchain.
        </strong>


        <button className="callButton" onClick={connectWallet}>
          <strong>🦊 Connectar sua carteira</strong>
        </button>
        <button className="callButton" onClick={call}>
          <h2>👋 Olá!</h2>
        </button>
      </div>
    </div>
  );
}
