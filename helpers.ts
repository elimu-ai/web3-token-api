import { ethers } from "ethers";
import ElimuToken from "./abis/ElimuToken.json";
import { appConfig } from "./config";

export const provider = new ethers.JsonRpcProvider(
  appConfig.RPC_URL,
  "mainnet",
);

export const tokenContract = new ethers.Contract(
  appConfig.CONTRACT_ADDRESS,
  ElimuToken.abi,
  provider,
);
