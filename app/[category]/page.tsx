import Link from "next/link";

import Navigation from "@/components/category/navigation";
import NFTItem from "@/components/category/nft-item";

export default function Page() {
  return (
    <main className="w-full pt-20">
      <Navigation />
      <section className="max-w-7xl mx-auto py-20 grid grid-cols-4 gap-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <Link href={`/assets/${index}`} key={`nft-item-${index}`}>
            <NFTItem />
          </Link>
        ))}
      </section>
    </main>
  );
}
