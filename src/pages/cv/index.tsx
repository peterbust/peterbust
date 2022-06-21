import { PrismicRichText, SliceZone } from "@prismicio/react";
import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import type { PrismicDocument, RichTextField } from "@prismicio/types";

import { Container, Spacer, Typography } from "@components/index";
import { createClient } from "../../../prismicio";
import { CvEntrySlice } from "../../slices/index";
import { renderHero, RenderLinkAlternate } from "../index";

type Props = {
  data: {
    contact: RichTextField;
    hero: PrismicDocument & {
      data: {
        introduction: RichTextField;
        subtitle: RichTextField;
        title: RichTextField;
      };
    };
    introduction: RichTextField;
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
        {RenderLinkAlternate("/cv")}
      </Head>
      <Container as="main">
        {renderHero(heroTitle, heroSubtitle, heroIntroduction)}
        <Spacer y={0.75} breakpoints={{ md: { y: 1 } }} />
        <PrismicRichText
          field={data.introduction}
          components={{
            paragraph: ({ children }) => <Typography>{children}</Typography>,
          }}
        />
        <Spacer y={1} breakpoints={{ md: { y: 2 } }} />
        <SliceZone slices={slices} components={{ cv_entry: CvEntrySlice }} />
        <Spacer y={2} breakpoints={{ md: { y: 3.5 } }} />
        <PrismicRichText
          field={data.contact}
          components={{
            paragraph: ({ children }) => <Typography>{children}</Typography>,
          }}
        />
      </Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
  previewData,
}) => {
  const client = createClient({ previewData });

  const document = await client.getSingle("cv-page", {
    fetchLinks: ["hero.title", "hero.subtitle", "hero.introduction"],
    lang: (locale as Locale) === "en" ? "en-GB" : "nl-NL",
  });

  return {
    props: { data: document.data },
  };
};

export default CV;
