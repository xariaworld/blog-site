import { Box, Typography } from "@mui/material";
import { ARTICLE_PAGES } from "../constants";
import React from "react";

const ImageSection = ({
  title,
  titleImage,
}: {
  title?: string;
  titleImage: string;
}) => {
  return (
    <Box position="relative">
      <Box component="img" src={titleImage} alt={title} width="100%" />
      {title && (
        <Typography
          variant="h1"
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            textAlign: "center",
            textShadow: "4px 4px 10px rgba(0, 0, 0, 0.8)",
            fontWeight: 700,
            width: "100%",
          }}
          color="white"
        >
          {title}
        </Typography>
      )}
    </Box>
  );
};

export const ArticlePage = ({ page }: { page: string }) => {
  const article = ARTICLE_PAGES.find((a) => a.to === page)!;
  return (
    <Box>
      <ImageSection title={article.name} titleImage={article.heroImageUrl} />
      {article.sections.map((section, index) => {
        if (section.type === "text") {
          return (
            <React.Fragment key={index}>
              {section.topImageUrl && (
                <ImageSection title="" titleImage={section.topImageUrl} />
              )}
              <Box
                key={index}
                sx={{
                  p: 4,
                  textAlign: "start",
                  whiteSpace: "pre",
                  textWrap: "wrap",
                }}
              >
                {section.title && (
                  <Typography variant="h4" maxWidth={1200} mx="auto">
                    {section.title}
                  </Typography>
                )}
                <Typography maxWidth={1200} mx="auto">
                  {section.text}
                </Typography>
              </Box>
              {section.bottomImageUrl && (
                <ImageSection title="" titleImage={section.bottomImageUrl} />
              )}
            </React.Fragment>
          );
        } else {
          return <ImageSection title="" titleImage={section.src} key={index} />;
        }
      })}
    </Box>
  );
};
