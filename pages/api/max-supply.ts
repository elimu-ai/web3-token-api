import { ethers } from "ethers";
import type { NextApiRequest, NextApiResponse } from "next";
import { tokenContract } from "../../helpers";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const timestampJuly2030 = 1909094400; // 2030-07-01 00:00:00

  try {
    const maxSupply =
      await tokenContract.getMaxTotalSupplyForTimestamp(timestampJuly2030);

    res.status(200).send(ethers.formatEther(maxSupply));
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the max supply.");
  }
}
