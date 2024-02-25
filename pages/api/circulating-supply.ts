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
  const treasuryBalance = await tokenContract.balanceOf("0x1703ed1bFacC04b7eB654b297aA4E52EBC008722");
  const safeBalance = await tokenContract.balanceOf("0xD452c1321E03c6e34aD8c6F60b694b1E780c4B75");
  const hedgeyBalance = await tokenContract.balanceOf("0x912F211B5d24B95CAAE5e568D621d9B72D5bccdB");
  const governBalance = await tokenContract.balanceOf("0x7767a2e18f0C477b20E85Bd5252b3643D273cD25");
  const nullBalance = await tokenContract.balanceOf("0x000000000000000000000000000000000000dEaD");
  const disperseBalance = await tokenContract.balanceOf("0xD152f549545093347A162Dce210e7293f1452150");
  const circulatingSupply = totalSupply - treasuryBalance - safeBalance - hedgeyBalance - governBalance - nullBalance - disperseBalance;
  res.status(200).send(ethers.formatEther(circulatingSupply));
}
