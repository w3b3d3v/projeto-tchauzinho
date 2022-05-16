import abi from "./contractABI.json"
import { ethers } from "ethers";

const contractAddress = "0x180ef25d4E5ABd84a0545baE3e847A17C0e012d0" // Goerli
const provider = new ethers.providers.Web3Provider(window.ethereum)
const contractABI = abi.abi

export const callCounterContract = new ethers.Contract(contractAddress, contractABI, provider.getSigner());
