import type { NextApiRequest, NextApiResponse } from "next";
import { ethers, getDefaultProvider } from "ethers";
import ElimuToken from '../../abis/ElimuToken.json'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const provider = getDefaultProvider("mainnet");
  const tokenContract = new ethers.Contract(
    "0xe29797910D413281d2821D5d9a989262c8121CC2",
    ElimuToken.abi,
    provider
  );
  const totalSupply = await tokenContract.totalSupply();
  const treasurySupply = await tokenContract.balanceOf("0x1703ed1bfacc04b7eb654b297aa4e52ebc008722");
  const circulatingSupply = totalSupply - treasurySupply;
  res.status(200).send(ethers.formatEther(circulatingSupply));
}
