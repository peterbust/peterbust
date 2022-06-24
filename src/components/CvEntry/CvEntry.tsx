import { PrismicRichText } from "@prismicio/react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@components";
import { Props } from "./CvEntry.types";
import { StyledDetailsWrapper } from "./CvEntry.styled";

const CvEntry = ({ slice }: Props) => (
  <Accordion>
    <AccordionSummary label={slice.primary.title} />
    <AccordionDetails>
      <StyledDetailsWrapper>
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <Typography size="small">{children}</Typography>
            ),
          }}
        />
      </StyledDetailsWrapper>
    </AccordionDetails>
  </Accordion>
);

export default CvEntry;
