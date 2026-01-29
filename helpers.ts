import { ethers } from "ethers";
import { appConfig } from "./config";

export const provider = new ethers.JsonRpcProvider(
  appConfig.RPC_URL,
  "mainnet",
);
