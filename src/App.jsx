import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import './App.css';
import abi from "./utils/WavePortal.json"

export default function App() {

  const [currentAccount, setCurrentAccount] = useState("");
  const [allWaves, setAllWaves] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const [lastWaveTime, setLastWaveTime] = useState(0); // Adição do estado para controlar o tempo
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contractABI = abi.abi;

  const getAllWaves = async () => {
    const { ethereum } = window;
  
    try {
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
        const waves = await wavePortalContract.getAllWaves();
  
        const wavesCleaned = waves.map(wave => {
          return {
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message,
          };
        });
  
        setAllWaves(wavesCleaned);
      } else {
        console.log("Objeto Ethereum inexistente!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    let wavePortalContract;
  
    const onNewWave = (from, timestamp, message) => {
      console.log("NewWave", from, timestamp, message);
      setAllWaves(prevState => [
        ...prevState,
        {
          address: from,
          timestamp: new Date(timestamp * 1000),
          message: message,
        },
      ]);
    };
  
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
  
      wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
      wavePortalContract.on("NewWave", onNewWave);
    }
  
    return () => {
      if (wavePortalContract) {
        wavePortalContract.off("NewWave", onNewWave);
      }
    };
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Garanta que possua a Metamask instalada!");
        return;
      } else {
        console.log("Temos o objeto ethereum", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Encontrada a conta autorizada:", account);
        setCurrentAccount(account)
        // Após conectar, atualiza as mensagens
        getAllWaves();
      } else {
        console.log("Nenhuma conta autorizada foi encontrada")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("MetaMask encontrada!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Conectado", accounts[0]);
      setCurrentAccount(accounts[0]);
      // Após conectar, atualiza as mensagens
      getAllWaves();
    } catch (error) {
      console.log(error)
    }
  }

  const wave = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const currentTime = Math.floor(Date.now() / 1000);
        const timeSinceLastWave = currentTime - lastWaveTime;

        if (timeSinceLastWave < 300) {
          alert("Aguarde 5 minutos antes de enviar outra mensagem.");
          return;
        }

        setLastWaveTime(currentTime);

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
 
        let count = await wavePortalContract.getTotalWaves();
        console.log("Recuperado o número de mensagens...", count.toNumber());

        const waveTxn = await wavePortalContract.wave(userMessage, { gasLimit: 300000 });
        console.log("Minerando no bloco:", waveTxn.hash);

        await waveTxn.wait();
        console.log("Minerado -- ", waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log("Total de mensagens recuperadas...", count.toNumber());
        
        // Atualiza as mensagens após enviar com sucesso
        getAllWaves();


      } else {
        console.log("Objeto Ethereum não encontrado!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const bgAnimation = document.getElementById('bgAnimation');
  
    const numberOfColorBoxes = 400;
  
    for (let i = 0; i < numberOfColorBoxes; i++) {
      const colorBox = document.createElement('div');
      colorBox.classList.add('colorBox');
      bgAnimation.append(colorBox);
    }
  }, []);

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          👋 Olá Pessoal!
        </div>
        <div className="bio">
         {!currentAccount && (
            <>
              <p>Conecta com a sua carteira Ethereum e compartilhe algo especial. Uma playlist única, um poema que te faz refletir,
                 ou até mesmo uma piada para animar o dia. Estou pronto para conferir o que você tem a oferecer! 🔗😄</p>
              <button className="connectWalletButton" onClick={connectWallet}>
                Conectar carteira
              </button>
            </>
            )}
          {currentAccount && (
            <> 
              <p>Agora que estamos conectados, solte a criatividade e compartilhe algo único. Que tal um link da sua playlist favorita, um poema ou até mesmo uma piada que faça os smart contracts rirem? </p>
              <div className="buttonContainer">
                <input 
                  className="messageInput"
                  type="text" 
                  placeholder="Digite sua mensagem" 
                  value={userMessage} 
                  onChange={(e) => setUserMessage(e.target.value)} 
                />
                <button className="waveButton" onClick={wave}>
                Enviar sua mensagen
                </button>
              </div>
            </>
          )}
            
        </div>
        {allWaves.map((wave, index) => (
          <div key={index} className="mensagens" >
            <div>Endereço: {wave.address}</div>
            <div>Data/Horário: {wave.timestamp.toString()}</div>
            <div className="destacado">Mensagem: {wave.message}</div>
          </div>
        ))}

      </div>
      <div id="bgAnimation" className="bgAnimation">
        {/* Este elemento irá conter as animações de fundo */}
        <div className="backgroundAmim"></div>
      </div>
    </div>
  );
}
