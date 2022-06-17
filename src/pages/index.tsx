import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";

import { Typography } from "@components/index";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Peter Bust, Front-end Developer</title>
    </Head>
    <main style={{ padding: "10rem" }}>
      <Typography style="h1">Peter Bust</Typography>
      <Typography style="h2">
        Freelance Front-end Developer,
        <br />
        favoring React and Next.js
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <div style={{ width: "60%" }}>
        <Typography>
          Met meer dan tien jaar web ervaring heb ik gewerkt voor zowel
          Nederlandse als internationale merken zoals CZ, Shimano, Jumbo,
          L&apos;Oréal en Proctor & Gamble als Senior- en Lead Front-end
          Developer. Gevestigd in Eindhoven.
        </Typography>
        <Typography>
          <Link href="/cv">
            <a>CV</a>
          </Link>
        </Typography>
      </div>
    </main>
  </div>
);

export default Home;
