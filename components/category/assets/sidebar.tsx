const Sidebar = () => {
  return (
    <aside className="w-1/4 space-y-20">
      <div className="w-[300px] h-[300px] bg-gray-700 rounded-lg flex items-center justify-center">
        {/* <Image
              src="/images/ninja.png"
              alt="NFT Name"
              width={240}
              height={240}
              className="object-cover"
            /> */}
        <div className="h-[240px] w-[240px] bg-gray-300" />
      </div>
      <div>
        <h3 className="text-xl text-white font-bold mb-4">DESCRIPTION</h3>
        <p className="text-base text-muted-foreground font-medium px-4">
          Produced by Anonymous
        </p>
      </div>
      <div>
        <h3 className="text-xl text-white font-bold mb-4">DETAILS</h3>
        <div className="flex items-center gap-x-2 mb-2 px-4">
          <span className="text-base text-muted-foreground font-medium">
            Contract Address :
          </span>
          <span className="text-base text-muted-foreground font-medium">
            {/* Something */}
          </span>
        </div>
        <div className="flex items-center gap-x-2 mb-2 px-4">
          <span className="text-base text-muted-foreground font-medium">
            Token ID:
          </span>
          <span className="text-base text-muted-foreground font-medium">
            {/* Something */}
          </span>
        </div>
        <div className="flex items-center gap-x-2 mb-2 px-4">
          <span className="text-base text-muted-foreground font-medium">
            Grade:
          </span>
          <span className="text-base text-muted-foreground font-medium">
            {/* Something */}
          </span>
        </div>
        <div className="flex items-center gap-x-2 mb-2 px-4">
          <span className="text-base text-muted-foreground font-medium">
            Token Standard:
          </span>
          <span className="text-base text-muted-foreground font-medium">
            {/* Something */}
          </span>
        </div>
        <div className="flex items-center gap-x-2 mb-2 px-4">
          <span className="text-base text-muted-foreground font-medium">
            Chain:
          </span>
          <span className="text-base text-muted-foreground font-medium">
            {/* Something */}
          </span>
        </div>
        <div className="flex items-center gap-x-2 mb-2 px-4">
          <span className="text-base text-muted-foreground font-medium">
            Last Updated:
          </span>
          <span className="text-base text-muted-foreground font-medium">
            {/* Something */}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
