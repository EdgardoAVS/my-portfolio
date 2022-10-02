import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import EdgardoAVS from "../public/EdgardoAVS.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EdgardoAVS Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 max-w-screen-xl m-auto">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">EdgardoAVS</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Edgardo Vargas
            </h2>
            <h3 className="text-2xl py-2">Frontend Developer</h3>
            <p className="text-lg py-5 leading-8 text-gray-800">
              I have experience developing personal web applications, using
              technologies such as, React.js, Next.js, Tailwind CSS, among
              others.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <Link href="https://www.linkedin.com/in/edgardoavs/">
              <a target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
            </Link>
            <Link href="https://github.com/EdgardoAVS">
              <a target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
              </a>
            </Link>
            <Link href="https://twitter.com/EdgardoAVS">
              <a target="_blank" rel="noopener noreferrer">
              <AiFillTwitterSquare />
              </a>
            </Link>
            
            
          </div>
          <div className="bg-gradient-to-b from-teal-500 overflow-hidden relative rounded-full w-80 h-80 mt-20 mx-auto">
            <Image
              src={EdgardoAVS}
              layout="fill"
              objectFit="cover"
              alt="Edgardo Vargas, Frontend Developer"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Skills</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
