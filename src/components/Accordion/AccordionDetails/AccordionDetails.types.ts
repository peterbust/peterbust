import { ComponentPropsWithoutRef } from "react";

export type Props = ComponentPropsWithoutRef<"div"> & {
  expanded?: boolean;
};
