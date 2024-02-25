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
  const timestampJuly2030 = 1909094400; // 2030-07-01 00:00:00
  try {
    const maxSupply = await tokenContract.getMaxTotalSupplyForTimestamp(timestampJuly2030);
    res.status(200).send(ethers.formatEther(maxSupply));
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching the max supply.');
  }
}
