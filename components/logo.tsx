import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={245}
        height={45}
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
