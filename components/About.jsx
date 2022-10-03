import Image from "next/image";
import Link from "next/link";
import React from "react";
import EdgardoAVS from "../public/assets/Logotipo/EdgardoAVS.png";

export const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building responsive web applications, taking into
            account very important factors such as accessibility, user
            experience and site optimization for search engines and users.
          </p>
          <p className="py-2 text-gray-600">
            Improving day by day my communication skills, teamwork, problem
            solving, knowing how to give and receive feedback and most
            importantly with the desire to constantly learn new technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className=" h-auto w-full m-auto rounded-full flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image src={EdgardoAVS} alt="Edgardo Vargas imagen" />
        </div>
      </div>
    </div>
  );
};
