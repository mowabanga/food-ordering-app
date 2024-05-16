import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="/">
        Pizza Hut
      </Link>
      <nav className="flex gap-5 text-gray-600 font-semibold items-center">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link
          href="/login"
          className="bg-primary text-white px-6 py-2 rounded-full"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
