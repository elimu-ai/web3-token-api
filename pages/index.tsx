import Link from "next/link";

export default function Index() {
  return (
    <ul>
      <li>
        <Link href="/api/total-supply">
          /api/total-supply
        </Link>
      </li>
    </ul>
  );
}
