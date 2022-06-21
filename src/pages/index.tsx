import { PrismicRichText } from "@prismicio/react";
import Head from "next/head";
import Link from "next/link";
import type { GetStaticProps, NextPage } from "next";
import type { PrismicDocument, RichTextField } from "@prismicio/types";

import { Container, Spacer, Typography } from "@components/index";
import { createClient } from "../../prismicio";

type Props = {
  data: {
    hero: PrismicDocument & {
      data: {
        introduction: RichTextField;
        subtitle: RichTextField;
        title: RichTextField;
      };
    };
  };
};

export const renderHero = (
  title: RichTextField,
  subtitle: RichTextField,
  introduction: RichTextField
) => (
  <>
    <PrismicRichText
      field={title}
      components={{
        heading1: ({ children }) => (
          <Typography style="h1">{children}</Typography>
        ),
      }}
    />
    <PrismicRichText
      field={subtitle}
      components={{
        heading2: ({ children }) => (
          <Typography style="h2">{children}</Typography>
        ),
      }}
    />
    <Spacer y={2} breakpoints={{ md: { y: 3 }, lg: { y: 4.5 } }} />
    <PrismicRichText
      field={introduction}
      components={{
        paragraph: ({ children }) => <Typography>{children}</Typography>,
      }}
    />
  </>
);

const Home: NextPage<Props> = ({ data }) => {
  const {
    introduction: heroIntroduction,
    subtitle: heroSubtitle,
    title: heroTitle,
  } = data.hero.data;

  return (
    <div>
      <Head>
        <title>Peter Bust, Front-end Developer</title>
      </Head>
      <Container as="main">
        {renderHero(heroTitle, heroSubtitle, heroIntroduction)}
        <Spacer y={0.75} breakpoints={{ md: { y: 1 } }} />
        <Typography>
          <Link href="/cv">
            <a>CV</a>
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
  previewData,
}) => {
  const client = createClient({ previewData });

  const document = await client.getSingle("homepage", {
    fetchLinks: ["hero.title", "hero.subtitle", "hero.introduction"],
    lang: (locale as Locale) === "en" ? "en-GB" : "nl-NL",
  });

  return {
    props: { data: document.data },
  };
};

export default Home;
