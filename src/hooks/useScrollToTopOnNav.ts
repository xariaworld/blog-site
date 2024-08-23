import { useEffect } from "react";

export const useScrollToTopOnNav = ({ pathname }: { pathname: string }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
