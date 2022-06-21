import { PrismicRichText } from "@prismicio/react";
import styled from "styled-components";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@components/index";

type Props = {
  slice: any;
};

const StyledWrapper = styled.div`
  p:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`;

const CvEntrySlice = ({ slice }: Props) => (
  <Accordion>
    <AccordionSummary label={slice.primary.title} />
    <AccordionDetails>
      <StyledWrapper>
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <Typography size="small">{children}</Typography>
            ),
          }}
        />
      </StyledWrapper>
    </AccordionDetails>
  </Accordion>
);

export default CvEntrySlice;
