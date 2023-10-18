"use client";

import { Button } from "@/components/ui/button";

const CurrentPrice = () => {
  return (
    <div className="w-full bg-gray-700 p-10 rounded-lg">
      <h3 className="text-xl text-white font-bold mb-6">CURRENT PRICE</h3>
      <Button
        variant="primary"
        className="text-white font-semibold w-full mb-2"
      >
        MAKE OFFER
      </Button>
      <p className="text-sm text-red-500">
        {/* Please allow sufficient capacity of WBNB in META MASK wallet for buying NFT that you want ! */}
        Warning message ...
      </p>
    </div>
  );
};

export default CurrentPrice;
