import { useEffect, useState } from "react";

import { breakpoints } from "@styles/themes/default";
import { useCurrentDimensions } from "@utils/index";
import type { BreakpointHook } from "@styles/themes/styled";

type MediaQueries = {
  [key in BreakpointHook]: boolean;
};

/**
 * React hook to support breakpoints as render options.
 */
function useMediaQueries(): MediaQueries {
  const [mediaQueries, setMediaQueries] = useState({} as MediaQueries);
  const { width } = useCurrentDimensions();

  useEffect(() => {
    setMediaQueries({
      xsOnly: width >= breakpoints.xs && width < breakpoints.sm,
      sm: width >= breakpoints.sm,
      smOnly: width >= breakpoints.sm && width < breakpoints.md,
      md: width >= breakpoints.md,
      mdOnly: width >= breakpoints.md && width < breakpoints.lg,
      lg: width >= breakpoints.lg,
      lgOnly: width >= breakpoints.lg && width < breakpoints.xl,
      xl: width >= breakpoints.xl,
    });
  }, [width]);

  return mediaQueries;
}

export default useMediaQueries;
