import { Box, Button, TextField, Typography } from "@mui/material";
import { centeredColumnSx, centerSx, imgSx, pSx } from "../sx";
import { ARTICLE_PAGES, SITE_INTRO } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const search = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    window.location.href = `https://search.the-byte-404.com/ref/?token=mL1j6tYiK8&search=${encodeURIComponent(
      searchInput
    )}`;
  };

  return (
    <Box mt={8} pb={8}>
      <Box>
        <img style={{ maxWidth: 500 }} src={import.meta.env.VITE_LOGO} alt="" />
      </Box>
      <Box
        component="form"
        {...centerSx}
        flexDirection="column"
        mb={15}
        onSubmit={search}
      >
        <TextField
          sx={{
            width: "100%",
            borderRadius: "20px",
            bgcolor: "white",
            mb: "20px",
            maxWidth: "580px",
            "& .MuiInputBase-root": {
              borderRadius: "20px",
              bgcolor: "white",
            },
          }}
          placeholder="Search or type a URL"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button
          color="primary"
          sx={{
            bgcolor: "white",
            color: "black",
            p: "10px 20px",
            borderRadius: "20px",
          }}
          type="submit"
        >
          Search
        </Button>
      </Box>
      <Box {...centeredColumnSx}>
        {import.meta.env.VITE_HOME_TITLE && (
          <Box {...centerSx}>
            <img
              src={import.meta.env.VITE_HOME_TITLE}
              alt="home title"
              style={{ maxWidth: "480px" }}
            />
          </Box>
        )}
        {SITE_INTRO.map((paragraph) => {
          return (
            <Box sx={pSx} key={paragraph}>
              {paragraph}
            </Box>
          );
        })}
      </Box>

      <Box mt={6}>
        <Typography variant="h2" mb={8}>
          Latest
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(3,1fr)"
          gap="30px"
          width="fit-content"
          mx="auto"
        >
          {ARTICLE_PAGES.map(({ name, to, thumbnailImageUrl }) => (
            <Link key={to} to={to}>
              <Box>
                <Box>
                  <img
                    style={{ ...imgSx, maxWidth: "300px" }}
                    src={thumbnailImageUrl}
                    alt={name}
                  />
                </Box>
                <Typography variant="h5">{name}</Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
