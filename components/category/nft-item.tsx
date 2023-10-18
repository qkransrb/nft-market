import Image from "next/image";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

const NFTItem = () => {
  return (
    <Card className="border-none rounded-lg overflow-hidden bg-black">
      <CardContent className="p-6 bg-gray-700 rounded-lg overflow-hidde flex items-center justify-center">
        {/* <Image
          src="/images/ninja.png"
          alt="Preview"
          width={240}
          height={240}
          className="object-cover"
        /> */}
        <div className="w-[240px] h-[240px] bg-gray-300" />
      </CardContent>
      <CardFooter className="px-6 py-4 bg-black flex flex-col">
        <h3 className="text-white font-bold"># NFT Name</h3>
        <div className="flex items-center justify-center px-0 py-6 w-full">
          <div className="text-white w-1/2 flex flex-col items-center justify-center border-r-2 border-white">
            <p className="text-xs font-medium text-muted-foreground">FLOOR</p>
            <span className="text-lg text-white font-semibold">0 BNB</span>
          </div>
          <div className="text-white w-1/2 flex flex-col items-center justify-center">
            <p className="text-xs font-medium text-muted-foreground">HIGH</p>
            <span className="text-lg text-white font-semibold">0 BNB</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NFTItem;
