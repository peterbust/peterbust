import { PrismicRichText } from "@prismicio/react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@components/index";

type Props = {
  slice: any;
};

const CvEntrySlice = ({ slice }: Props) => (
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
);

export default CvEntrySlice;
