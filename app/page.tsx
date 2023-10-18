import { Button } from "@/components/ui/button";
import Banner from "@/components/home/banner";
import NFTRanking from "@/components/home/nft-ranking";
import TopCollection from "@/components/home/top-collection";
import UserRanking from "@/components/home/user-ranking";

export default function Home() {
  return (
    <main>
      <div className="h-[500px] w-full overflow-hidden relative">
        <video preload="auto" muted autoPlay playsInline loop>
          <source
            src="http://ntp-place.io/wp-content/uploads/2022/08/NTP-sub.mp4"
            type="video/mp4"
            height={500}
            className="w-full h-[500px]"
          />
        </video>
        <div className="absolute inset-0 z-10 w-full h-full bg-black/50" />
      </div>

      <div className="flex justify-center items-center gap-x-10 py-20">
        <Button
          variant="primary"
          className="rounded-full min-w-[200px] text-base font-semibold text-white"
        >
          ALL
        </Button>
        <Button
          variant="primary"
          className="rounded-full min-w-[200px] text-base font-semibold text-white"
        >
          METAVERSE
        </Button>
        <Button
          variant="primary"
          className="rounded-full min-w-[200px] text-base font-semibold text-white"
        >
          COLLECTION
        </Button>
      </div>

      <Banner />
      <TopCollection />
      <NFTRanking />
      <UserRanking />
    </main>
  );
}
