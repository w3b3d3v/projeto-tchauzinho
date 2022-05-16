import abi from "./contractABI.json"
import { ethers } from "ethers";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
const provider = new ethers.providers.Web3Provider(window.ethereum)
const contractABI = abi.abi

export const callCounterContract = new ethers.Contract(contractAddress, contractABI, provider.getSigner());
