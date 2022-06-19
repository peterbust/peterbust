import {
  cloneElement,
  createContext,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import type { SyntheticEvent } from "react";

import { stringToSlug } from "@utils/index";
import { StyledContainer } from "./Accordion.styled";
import type { Context, Props } from "./Accordion.types";

export const AccordionContext = createContext({} as Context);

const DsAccordion = forwardRef<HTMLDivElement, Props>(function DsAccordion(
  props,
  forwardRef
) {
  const { children, className, onChange, ...remainingProps } = props;
  const [Summary, Details] = children ?? [];
  const [expanded, setExpanded] = useState(false);

  /**
   * Toggle the accordion
   * And expose change to parent
   */
  const handleChange = useCallback(
    (e: SyntheticEvent) => {
      setExpanded(!expanded);
      if (onChange) onChange(e, !expanded);
    },
    [expanded, onChange, setExpanded]
  );

  /**
   * Set context
   */
  const contextValue = useMemo<Context>(
    () => ({ expanded, toggle: handleChange }),
    [expanded, handleChange]
  );

  // Defensive
  if (!children || children.length !== 2) return null;

  /**
   * Determine id
   * Use given ID or else generate one based on component name and label
   * (For A11Y; to link summary and details as related content)
   */
  const determineId = (component: "summary" | "details") => {
    const label = stringToSlug(Summary.props.label);
    const element = component === "summary" ? Summary : Details;
    return element.props.id ?? `accordion-${component}-${label}`;
  };

  return (
    // @ts-ignore
    <StyledContainer ref={forwardRef} {...remainingProps}>
      <AccordionContext.Provider value={contextValue}>
        {cloneElement(Summary, {
          "aria-controls": determineId("details"),
          "aria-expanded": expanded ? "true" : "false",
          id: determineId("summary"),
        })}
      </AccordionContext.Provider>
      {cloneElement(Details, {
        "aria-labelledby": determineId("summary"),
        expanded,
        id: determineId("details"),
      })}
    </StyledContainer>
  );
});

export default DsAccordion;
