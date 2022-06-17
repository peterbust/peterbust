import { PrismicRichText } from "@prismicio/react";

import { Typography } from "@components/index";

type Props = {
  slice: any;
};

const TextSlice = ({ slice }: Props) => (
  <>
    <PrismicRichText
      field={slice.primary.text}
      components={{
        paragraph: ({ children }) => <Typography>{children}</Typography>,
      }}
    />
  </>
);

export default TextSlice;
