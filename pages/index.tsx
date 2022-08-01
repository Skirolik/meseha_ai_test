import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Ssr from "../components/Ssr";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>The meseha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Banner />

      <Ssr />
    </div>
  );
};

export default Home;
