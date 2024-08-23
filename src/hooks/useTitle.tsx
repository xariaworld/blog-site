import { useEffect, useRef } from "react";

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export const useTitle = ({ pathname }: { pathname: string }) => {
  const ref = useRef(document.title);

  useEffect(() => {
    if (pathname === "/") {
      document.title = ref.current;
      return;
    }

    const pageTitle = capitalizeWords(
      pathname.replace("/", "").replace("-", " ")
    );
    document.title = `${pageTitle} | ${import.meta.env.VITE_SITE_NAME}`;
  }, [pathname]);
};
