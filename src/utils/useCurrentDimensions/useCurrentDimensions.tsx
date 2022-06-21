import { useEffect, useState } from "react";

import { debounce } from "@utils/index";

/**
 * Hook to determine current window dimensions
 * Values are updated on window resize
 *
 * @returns The current window width and height
 */
function useCurrentDimensions(): { width: number; height: number } {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const setDimensions = () => {
    setWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );

    setHeight(
      window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight
    );
  };

  // Set initial dimensions
  // Reset dimensions on window resize
  // Remove event listener on unmount
  useEffect(() => {
    setDimensions();
    const setDimensionsDebounced = debounce(() => setDimensions(), 150);
    window.addEventListener("resize", setDimensionsDebounced);
    return () => window.removeEventListener("resize", setDimensionsDebounced);
  }, []);

  return { width, height };
}

export default useCurrentDimensions;
