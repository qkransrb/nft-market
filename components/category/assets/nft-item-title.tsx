const NFTItemTitle = () => {
  return (
    <div className="w-full bg-gray-700 p-10 rounded-lg">
      <h3 className="text-xl text-white font-bold mb-2">ITEM NFT TITLE</h3>
      <h4 className="text-base text-white font-normal mb-10"># 1</h4>

      <div className="w-full p-10 rounded-lg bg-black">
        <h4 className="text-lg text-white font-semibold mb-4">OWNED BY</h4>
        <div className="flex items-start gap-x-10">
          {/* <Image
            src="/images/ninja.png"
            alt="NFT Name"
            width={140}
            height={140}
            className="object-cover"
          /> */}
          <div className="w-[140px] h-[140px] bg-gray-300" />
          <div>
            <h4 className="text-base text-white font-semibold">Anonymous</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTItemTitle;
