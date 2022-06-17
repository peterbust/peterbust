import Head from "next/head";
import type { NextPage } from "next";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@components/index";

const CV: NextPage = () => (
  <div>
    <Head>
      <title>Peter Bust, Front-end Developer | CV</title>
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
          Mijn werkhouding is pragmatisch en extravert, ik ben regelmatig
          getypeerd als kartrekker. Ik waardeer een open cultuur waar ruimte is
          voor feedback, nieuwe ideeën en humor. Ik geef de voorkeur aan{" "}
          <a href="https://jamstack.org" rel="noreferrer" target="_blank">
            Jamstack
          </a>{" "}
          architectuur met{" "}
          <a href="https://reactjs.org" rel="noreferrer" target="_blank">
            React
          </a>{" "}
          en{" "}
          <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
            Next.js
          </a>{" "}
          maar ik typeer mezelf bovenal als JavaScript (TypeScript) developer
          met aandacht voor ontwerp, detail, conventies en herbruikbaarheid.
        </Typography>
        <Accordion>
          <AccordionSummary label="Opleiding" />
          <AccordionDetails>
            <Typography size="small">
              Fontys Hogescholen ICT, Eindhoven
              <br />
              Bachelor of Information & Communication Technology (HBO)
              <br />
              2007 – 2011
              <br />
              Cum laude afgestudeerd.
            </Typography>
            <Typography size="small">
              Aanvullend certificaat: succesvolle deelname excellence programma.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary label="Cursussen" />
          <AccordionDetails>
            <Typography size="small">
              Microsoft Azure Fundamentals (AZ-900)
              <br />
              In 2021 voor CZ
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary label="Senior / Lead Front-end Developer bij CZ, Tilburg (remote)" />
          <AccordionDetails>
            <Typography size="small">Mei 2020 – augustus 2022</Typography>
            <Typography size="small">
              Als Senior- en Lead Front-end Developer bij verzekeraar:{" "}
              <a href="https://www.cz.nl/" rel="noreferrer" target="_blank">
                CZ
              </a>{" "}
              heb ik me bezig gehouden met de modernisering van het IT
              landschap. Naar aanleiding van afdeling doelstelligen heb ik
              samengewerkt met architecten, back-end en DevOps collega&apos;s om
              React te standaardiseren en daarna te formaliseren naar een nieuwe
              werkwijze: ontkoppelde presentatie middels Jamstack architectuur.
              Micro Frontends verantwoordelijk voor het presenteren van
              bedrijfslogica welke aangeboden via REST API.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary label="Senior / Lead Front-end Developer bij Valtech, Eindhoven" />
          <AccordionDetails>
            <Typography size="small">Februari 2017 – mei 2020</Typography>
            <Typography size="small">
              Als Senior- en Lead Front-end Developer bij ecommerce agency:{" "}
              <a
                href="https://www.valtech.com"
                rel="noreferrer"
                target="_blank"
              >
                Valtech
              </a>{" "}
              was ik verantwoordelijk voor het opzetten en onderhouden van
              modulaire front-end oplossingen als onderdeel van MVC platformen
              zoals AEM en Sitecore. Voor zowel Nederlandse als internationale
              klanten zoals Shimano (Senior), Jumbo (Senior), L&apos;Oréal
              (Lead) en Proctor & Gamble (Lead).
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary label="Creative Developer bij HeyHeydeHaas, Eindhoven" />
          <AccordionDetails>
            <Typography size="small">Juli 2014 – November 2016</Typography>
            <Typography size="small">
              Als creatief developer bij ontwerp studio:{" "}
              <a
                href="https://heyheydehaas.com"
                rel="noreferrer"
                target="_blank"
              >
                HeyHeydeHaas
              </a>{" "}
              was ik verantwoordelijk voor het ontwerp en realisatie van web
              projecten. Voor klanten zoals de Nederlandse Overheid, AtelierNL,
              Grietje Scheepers en Grafisch Design Festival Breda.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary label="Creative Developer ZZP, Eindhoven" />
          <AccordionDetails>
            <Typography size="small">Maart 2011 – July 2014</Typography>
            <Typography size="small">
              ZZP op projectbasis voor grafisch ontwerp en web development.
              Voornamelijk in dienst van andere ontwerpbureaus voor een derde
              opdrachtgever. Veelal in de culturele sector.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary label="Kennis en vaardigheden" />
          <AccordionDetails>
            <Typography size="small">
              Primaire vaardigheden
              <br />
              HTML, CSS, JavaScript (TypeScript), Node.js, React, Vue.js,
              Jamstack, Micro Frontends, accessibility, unit- and functional
              testing, module bundling, ontwerp (Sketch en Figma).
            </Typography>
            <Typography size="small">
              Ervaring
              <br />
              REST API, GraphQL, Azure Cloud, CI/CD.
            </Typography>
            <Typography size="small">
              Soft skills
              <br />
              Proactief, pragmatisch, extravert en communicatief.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </main>
  </div>
);

export default CV;
