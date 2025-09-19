import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center py-8 px-36 absolute left-0 top-0 right-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={20}
            className="h-auto w-auto"
          />
        </Link>

        <nav className="uppercase tracking-widest text-lg flex gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
