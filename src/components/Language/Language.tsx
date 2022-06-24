import { useRouter } from "next/router";
import Link from "next/link";

import { StyledLink } from "./Language.styled";
import { Typography } from "@components";

const Language = () => {
  const { locale, pathname } = useRouter();
  const otherLocale = (locale as Locale) === "en" ? "nl" : "en";

  return (
    <Link href={pathname} locale={otherLocale} passHref>
      <StyledLink tabIndex={0}>
        <Typography as="span" size="small">
          {otherLocale.toUpperCase()}
        </Typography>
      </StyledLink>
    </Link>
  );
};

export default Language;
