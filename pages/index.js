import Head from "next/head";
import { About } from "../components/About";
import { Main } from "../components/Main";

import { Navbar } from "../components/Navbar";
import { Technologies } from "../components/Technologies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>EdgardoAVS - Frontend Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      
      <Main/>

      <About/>

      <Technologies/>

      
    </div>
  );
}
