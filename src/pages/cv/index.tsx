import { SliceZone } from "@prismicio/react";
import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps, NextPage } from "next";
import type { PrismicDocument, RichTextField } from "@prismicio/types";

import { createClient } from "../../../prismicio";
import { Spacer, Typography } from "@components/index";
import { renderHero } from "../index";
import { CvEntrySlice, TextSlice } from "../../slices/index";

type Props = {
  data: {
    hero: PrismicDocument & {
      data: {
        introduction: RichTextField;
        subtitle: RichTextField;
        title: RichTextField;
      };
    };
    slices: any;
  };
};

const CV: NextPage<Props> = ({ data }) => {
  const {
    introduction: heroIntroduction,
    subtitle: heroSubtitle,
    title: heroTitle,
  } = data.hero.data;

  const slices = data.slices;

  return (
    <div>
      <Head>
        <title>Peter Bust, Front-end Developer | CV</title>
      </Head>
      <main style={{ padding: "10rem", width: "75%" }}>
        {renderHero(heroTitle, heroSubtitle, heroIntroduction)}
        <Spacer y={1} />
        <SliceZone
          slices={[slices[0]]}
          components={{ text: TextSlice, curriculum_vitae: CvEntrySlice }}
        />
        <Spacer y={1} />
        <SliceZone
          slices={slices.slice(1)}
          components={{ text: TextSlice, curriculum_vitae: CvEntrySlice }}
        />
        <Spacer y={3} />
        <Typography>
          More or reach out:{" "}
          <Link href="/cv">
            <a>LinkedIn</a>
          </Link>
        </Typography>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const document = await client.getSingle("cv-page", {
    fetchLinks: ["hero.title", "hero.subtitle", "hero.introduction"],
  });

  return {
    props: { data: document.data },
  };
};

export default CV;
