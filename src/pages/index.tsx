import Head from "next/head";
import type { NextPage } from "next";

import { ProfileCard } from "@components/index";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Peter Bust, senior front-end developer</title>
    </Head>
    <main>
      <ProfileCard />
    </main>
  </div>
);

export default Home;
