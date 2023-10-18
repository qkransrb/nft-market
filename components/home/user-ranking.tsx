import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const UserRanking = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto w-full">
      <div className="mb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl text-white font-semibold">User Ranking</h2>
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
          {Array.from({ length: 3 }).map((item, index) => (
            <li
              key={`top-collection-${index}`}
              className="relative flex items-center gap-10"
            >
              <div className="w-[160px] h-[160px] rounded-xl bg-gray-300" />
              {index === 0 && (
                <Image
                  src="/images/trophy.png"
                  alt="Trophy"
                  width={80}
                  height={80}
                  className="object-contain absolute -top-10 -left-3.5"
                />
              )}
              <span className="absolute -left-10 bottom-0 italic text-[70px] text-white font-extrabold leading-none">
                {index + 1}
              </span>

              <div>
                <p className="text-xl text-white font-semibold mb-6">
                  User Name
                </p>
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

export default UserRanking;
