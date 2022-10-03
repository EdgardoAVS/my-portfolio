import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EdgardoAVS from "../public/assets/Logotipo/Logo-rm-bg.png";

import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
  AiOutlineClose,
  AiOutlineMenu,
  AiFillMail,
} from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "absolute w-full h-20 z-[100] ease-in-out duration-300"
          : "absolute shadow-sm w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 max-w-7xl m-auto">
        <Link href="/">
          <a className="relative top-1">
            <Image
              width={200}
              height={200}
              src={EdgardoAVS}
              alt="Edgardo Vargas logotipo"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#technologies">Technologies</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex w-full h-12 items-center justify-between">
              <Link href="/">
                <a className="relative top-2">
                  <Image
                    width={120}
                    height={120}
                    src={EdgardoAVS}
                    alt="Edgardo Vargas logotipo"
                    onClick={handleNav}
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%]">
                Let&apos;s build incredible experiences together.
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="#technologies">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Technologies
                </li>
              </Link>
              <Link href="#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-32">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/edgardoavs"
                  target="_black"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillLinkedin />
                  </div>
                </a>
                <a
                  href="https://www.github.com/edgardoavs"
                  target="_black"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillGithub />
                  </div>
                </a>
                <a
                  href="https://www.twitter.com/edgardoavs"
                  target="_black"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillTwitterSquare />
                  </div>
                </a>
                <Link href="#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiFillMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
