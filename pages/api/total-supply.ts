import type { NextApiRequest, NextApiResponse } from "next";
import { ethers, getDefaultProvider } from "ethers";
import ElimuToken from '../../abis/ElimuToken.json'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const provider = getDefaultProvider("mainnet");
  const contract = new ethers.Contract(
    "0xe29797910D413281d2821D5d9a989262c8121CC2",
    ElimuToken.abi,
    provider
  );
  const totalSupply = await contract.totalSupply();
  res.status(200).send(ethers.formatEther(totalSupply));
}
