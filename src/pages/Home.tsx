import { Box, Button, TextField, Typography } from "@mui/material";
import { centeredColumnSx, centerSx, imgSx, pSx } from "../sx";
import { ARTICLE_PAGES } from "../constants";
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
    window.location.href = `https://search.the-byte-404.com/?search=${encodeURIComponent(
      searchInput
    )}`;
  };

  return (
    <Box mt={8} pb={8}>
      <Box>
        <img src="logo.webp" alt="" />
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
        <Box {...centerSx}>
          <img
            src="home-title-1.webp"
            alt="tech insights"
            style={{ maxWidth: "480px" }}
          />
        </Box>
        <Box sx={pSx}>
          Welcome to "The Byte 404" - your cozy corner in the digital world!
          We're all about making tech less of a maze and more of a friendly
          chat. Here, we break down the geek speak, explore cool gadgets, and
          share what's buzzing in the tech neighborhood. Join us on this
          laid-back journey where we unravel the digital mysteries, sprinkle in
          some fun, and keep things light and breezy.
        </Box>
        <Box sx={pSx}>
          Whether you're a tech guru or just dipping your toes into the digital
          pool, "The Byte 404" is your go-to spot for byte-sized tech stories.
          So, kick back, relax, and let's navigate the tech world together - no
          coding manual required! Welcome home.
        </Box>
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
            <Link to={to}>
              <Box key={to}>
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
