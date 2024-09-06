// @ts-expect-error - no types for virtual:data
import data from "virtual:data";

interface ImageSection {
  type: "image";
  src: string;
  alt?: string;
}

interface TextSection {
  type: "text";
  title?: string;
  text: string;
  topImageUrl?: string;
  bottomImageUrl?: string;
}

interface HtmlSection {
  type: "html";
  text: string;
  topImageUrl?: string;
  bottomImageUrl?: string;
}

export interface Article {
  name: string;
  to: string;
  heroImageUrl: string;
  thumbnailImageUrl: string;
  sections: (ImageSection | TextSection | HtmlSection)[];
}

export const ARTICLE_PAGES: Article[] = data.ARTICLE_PAGES;
export const SITE_INTRO: string[] = data.SITE_INTRO;
