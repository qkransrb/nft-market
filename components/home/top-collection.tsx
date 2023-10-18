import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const TopCollection = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto w-full">
      <div className="mb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl text-white font-semibold">Top Collection</h2>
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
        <ul className="flex items-center justify-between">
          {Array.from({ length: 6 }).map((item, index) => (
            <li key={`top-collection-${index}`} className="relative">
              <div className="w-[200px] h-[200px] rounded-xl bg-gray-300" />
              {index === 0 && (
                <Image
                  src="/images/trophy.png"
                  alt="Trophy"
                  width={80}
                  height={80}
                  className="object-contain absolute -top-10 -left-3.5"
                />
              )}
              <div className="space-y-4 mt-2 p-4">
                <h3 className="text-lg text-white font-semibold">NFT Name</h3>
                <div className="flex justify-between">
                  <div className="w-1/2 flex flex-col gap-y-1">
                    <span className="text-white text-xs text-start">FLOOR</span>
                    <span className="text-white text-base font-semibold">
                      0.01 BNB
                    </span>
                  </div>
                  <div className="w-1/2 flex flex-col gap-y-1">
                    <span className="text-white text-xs text-end">
                      24H VOLUME
                    </span>
                    <span className="text-white text-base font-semibold text-end">
                      0.01 BNB
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopCollection;
