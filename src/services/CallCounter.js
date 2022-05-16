import abi from "./contractABI.json"
import { ethers } from "ethers";

const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
const provider = new ethers.providers.Web3Provider(window.ethereum)
const contractABI = abi.abi

export const callCounterContract = new ethers.Contract(contractAddress, contractABI, provider.getSigner());
