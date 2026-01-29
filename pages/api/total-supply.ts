import { ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";
import { tokenContract } from "../../helpers";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const totalSupply = await tokenContract.totalSupply();

  res.status(200).json({ totalSupply: ethers.formatEther(totalSupply) });
}
