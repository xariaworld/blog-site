import { Box, Typography } from "@mui/material";
import { pSx } from "../sx";

const boxSx = {
  ...pSx,
  maxWidth: 700,
  textTransform: "uppercase",
};

export const Statement = () => {
  return (
    <Box pb={8} width="100%" height="100%">
      <Box
        sx={{
          textAlign: "start",
          m: "20px 40px 20px 80px",
        }}
        height="100%"
      >
        <Box position="relative">
          <Typography
            fontWeight="500"
            textTransform="uppercase"
            sx={{
              fontSize: {
                xs: "1.5rem", // Small screens
                sm: "2rem", // Medium screens
                md: "4rem", // Large screens and up
              },
              mb: 2,
            }}
          >
            Statement
          </Typography>
          <Box
            position="absolute"
            height="25px"
            width="25px"
            bgcolor="red"
            top="40%"
            left="-40px"
          />
        </Box>

        <Box>
          <Box sx={boxSx}>
            <Typography>
              "Traffic to this site allows us to place native ads with targeted
              keywords on multiple platforms such as Outbrain, Taboola, and
              others, which then leads to our various sites where search ads are
              served."
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
