import Link from "next/link";

export default function Index() {
  return (
    <ul>
      <li>
        <Link href="/api/circulating-supply" id="circulatingSupplyLink">
          /api/circulating-supply
        </Link>
      </li>
      <li>
        <Link href="/api/total-supply" id="totalSupplyLink">
          /api/total-supply
        </Link>
      </li>
      <li>
        <Link href="/api/max-supply" id="maxSupplyLink">
          /api/max-supply
        </Link>
      </li>
    </ul>
  );
}
