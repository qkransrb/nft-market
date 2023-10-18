import CurrentPrice from "@/components/category/assets/current-price";
import Navigation from "@/components/category/navigation";
import NFTItemTitle from "@/components/category/assets/nft-item-title";
import Sidebar from "@/components/category/assets/sidebar";
import PriceHistory from "@/components/category/assets/price-history";
import NFTInfo from "@/components/category/assets/nft-info";
import Offers from "@/components/category/assets/offers";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="py-20">
      <Navigation />
      <div className="max-w-7xl mx-auto w-full flex items-start gap-x-20 mt-20">
        <Sidebar />
        <section className="w-3/4 h-full space-y-10">
          <NFTItemTitle />
          <CurrentPrice />
          <PriceHistory />
          <NFTInfo />
          <Offers />
        </section>
      </div>
    </main>
  );
}
