import Image from "next/image";
import Link from "next/link";
import logo from "../images/Manav Logo 2021_black.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { UserIcon } from "@heroicons/react/solid";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className={`${isScrolled && "bg-violet-900 dark:bg-violet-900"}`}>
      <div className="max-w-[1640px] m-auto flex justify-between items-center p-4">
        <Link href="/">
          <Image
            src={logo}
            height={80}
            width={70}
            alt="Logo"
            className="cursor-pointer object-contain"
          />
        </Link>

        <ul className="hidden sm:flex text-white ">
          <li className="headerLink">
            <Link href="/">Earth Pit Calculator</Link>
          </li>
          <li className="headerLink">
            <Link href="/">Aboutus</Link>
          </li>
          <li className="headerLink">
            <Link href="/">Contactus</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block sm:hidden z-10 text-white">
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  bg-black/75 text-center ease-in duration-300 text-white"
              : "sm:hidden absolute top-0 -left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-opacity-50 bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-green-700">
              <Link href="/">Predictions</Link>
            </li>
            <li className="p-4 text-4xl hover:text-green-700 ">
              <Link href="/">Earth Pit Calculator</Link>
            </li>
            <li className="p-4 text-4xl hover:text-green-700">
              <Link href="/">Aboutus</Link>
            </li>
            <li className="p-4 text-4xl hover:text-green-700">
              <Link href="/">Contactus</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-5  text-white dark:text-green-500 ">
          <Link href="/account">
            <UserIcon className="h-6 w-6 cursor-pointer hover:bg-green-200" />
          </Link>
          <h3 className="border px-4 py-1 rounded-full border-green-500 hover:bg-green-700 hover:text-white hover:shadow-lg">
            {" "}
            <Link href="/">Logout</Link>
          </h3>
          <button
            className=" rounded-full px-2 bg-blue-900 dark:bg-green-300 text-blue-50"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "Dark" : "light"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
