import Link from "next/link";

const Navbar = () => {
  return (
    <Link href={"/"}>
      <h1 className="text-red-600 text-center text-2xl md:text-3xl py-5 md:py-8 font-bold">
        The Mars&apos; Blog
      </h1>
    </Link>
  );
};

export default Navbar;
