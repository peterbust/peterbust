import type { ComponentProps } from "react";

export type Props = ComponentProps<"div"> & {
  /**
   * If accordion is expanded or not.
   * Controlled by DsAccordion.
   * @default false
   */
  expanded?: boolean;
};
