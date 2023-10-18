import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const NFTRanking = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto w-full">
      <div className="mb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl text-white font-semibold">NFT Ranking</h2>
          <Link href="/" className="flex items-center gap-x-2 group">
            <span className="text-lg text-white font-medium group-hover:text-brand-red transition-colors">
              Explore More
            </span>
            <ChevronRight
              size={18}
              className="text-white font-medium group-hover:text-brand-red transition-colors"
            />
          </Link>
        </div>
        <p className="text-lg text-white font-medium mt-2 ">
          Compete with others to get the rarest NFT items!
        </p>
      </div>
      <div>
        <ul className="grid grid-rows-3 grid-flow-col-dense gap-10">
          {Array.from({ length: 6 }).map((item, index) => (
            <li
              key={`nft-ranking-${index}`}
              className="relative flex items-center justify-between"
            >
              <div className="flex items-center gap-x-10">
                <div className="w-40 h-40 rounded-xl bg-gray-300" />
                {index === 0 && (
                  <Image
                    src="/images/trophy.png"
                    alt="Trophy"
                    width={80}
                    height={80}
                    className="object-contain absolute -top-10 -left-3.5"
                  />
                )}
                <h3 className="text-3xl text-white font-semibold flex items-start gap-x-4">
                  <span className="text-4xl italic font-extrabold">
                    {index + 1}.
                  </span>
                  <p className="flex flex-col gap-y-2">
                    <span># NFT Name</span>
                    <span className="text-lg font-medium">NFT Description</span>
                  </p>
                </h3>
              </div>
              <div className="flex flex-col items-center gap-y-2">
                <span className="text-white text-lg font-medium">VOLUME</span>
                <span className="text-2xl font-semibold text-white bg-brand-red px-6 py-2 rounded-full">
                  0.001 BNB
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NFTRanking;
