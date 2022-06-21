import type {
  ComponentPropsWithoutRef,
  ReactElement,
  SyntheticEvent,
} from "react";

import type { Props as AccordionDetailsProps } from "./AccordionDetails/AccordionDetails.types";
import type { Props as AccordionSummaryProps } from "./AccordionSummary/AccordionSummary.types";

export type Context = {
  expanded: boolean;
  toggle: (e: SyntheticEvent) => void;
};

export type Props = ComponentPropsWithoutRef<"div"> & {
  /**
   * Accepted children.
   */
  children: [
    ReactElement<AccordionSummaryProps>,
    ReactElement<AccordionDetailsProps>
  ];
  /**
   * Expose on change event to parent.
   */
  onChange?: (event: SyntheticEvent, expanded: boolean) => void;
};
