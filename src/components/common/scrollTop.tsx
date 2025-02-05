import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis(); // Get Lenis instance

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true }); // Use Lenis for scrolling
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
