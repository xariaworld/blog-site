/// <reference types="vite/client" />

import { Article } from "./constants";

declare module "virtual:data" {
  const ARTICLE_PAGES: Article[];

  export { ARTICLE_PAGES };
}

type VITE_SITE_CODE = "byte-404" | "better-life";
