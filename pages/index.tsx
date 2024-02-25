import Link from "next/link";

export default function Index() {
  return (
    <ul>
      <li>
        <Link href="/api/circulating-supply">
          /api/circulating-supply
        </Link>
      </li>
      <li>
        <Link href="/api/total-supply">
          /api/total-supply
        </Link>
      </li>
      <li>
        <Link href="/api/max-supply">
          /api/max-supply
        </Link>
      </li>
    </ul>
  );
}
