import type { TitleField, RichTextField } from "@prismicio/types";

export type Props = {
  slice: {
    primary: {
      title: TitleField;
      description: RichTextField;
    };
  };
};
