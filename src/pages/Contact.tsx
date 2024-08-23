import { Box, Typography } from "@mui/material";
import { centeredTopColumnSx, pSx } from "../sx";

export const Contact = () => {
  return (
    <Box pb={8} width="100%" height="100%">
      <Box
        sx={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(contact-bg.jpeg) center center/cover",
        }}
        height="100%"
        {...centeredTopColumnSx}
      >
        <Typography variant="h2" mb={8}>
          Contact
        </Typography>
        <Box>
          <Box sx={{ ...pSx, mx: "auto" }}>
            <Typography>
              We would love to hear from you! You can reach us at the following:
              <br />
              <br />
              Phone: +972527826323
              <br />
              <br />
              Email: hagai@xaria.world
              <br />
              <br />
              Address: Shtruk 12, Tel Aviv
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
