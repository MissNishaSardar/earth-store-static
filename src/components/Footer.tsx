import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="flex items-center justify-between border-t border-gray-400 px-48 py-6">
        <div className="flex items-center justify-center gap-3">
          <Link href="">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="">
          <Image
            src="/logo.png"
            alt="logo.png"
            height={20}
            width={250}
          />
        </div>
        <div className="text-lg">Copyright © 2025 Planet Earth Store</div>
      </section>
    </>
  );
};

export default Footer;
