import { Box } from "@mui/material";
import { imgSx } from "../sx";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box
      component="footer"
      borderTop="2px solid white"
      bgcolor="var(--bgColor)"
    >
      <Box maxWidth={900} m="20px auto">
        <Box textAlign="start" display="flex" alignItems="flex-end">
          <img
            src={import.meta.env.VITE_LOGO}
            alt="the byte 404 logo"
            style={{ ...imgSx, width: "200px" }}
          />
          &copy; 2024
        </Box>
        <Box
          display="flex"
          fontSize="12px"
          justifyContent="space-between"
          flexDirection={{
            xs: "column",
            md: "row",
          }}
        >
          <Box>
            Address: Shtruk 12, Tel Aviv, Israel | phone: +972527826323 | mail:
            hagai@xaria.world
          </Box>
          <Box
            display="flex"
            gap="10px"
            alignItems="center"
            justifyContent="center"
          >
            <Link to="/contact">Contact us</Link>
            <Link to="/terms">Terms & cons.</Link>
            <Link to="/statement">For Advertisers</Link>
            <Link to="/privacy">Privacy policy</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
