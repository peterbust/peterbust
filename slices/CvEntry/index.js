import React from "react";
import { PrismicRichText } from "@prismicio/react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@components/index";

const CvEntry = ({ slice }) => (
  <section>
    <Accordion>
      <AccordionSummary label={slice.primary.title} />
      <AccordionDetails>
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <Typography size="small">{children}</Typography>
            ),
          }}
        />
      </AccordionDetails>
    </Accordion>

    <style jsx>{`
      section {
        max-width: 800px;
        margin: 4em auto;
      }
    `}</style>
  </section>
);

export default CvEntry;
