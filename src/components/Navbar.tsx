import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { Box } from "@mui/material";
import { ARTICLE_PAGES } from "../constants";

export function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Box component="header" className={classes.root}>
      <Link to="/">
        <Box className={classes.logo}>
          <img src={import.meta.env.VITE_LOGO} alt="the byte 404 logo" />
        </Box>
      </Link>
      <div>
        {ARTICLE_PAGES.map(({ name, to }) => {
          return (
            <Link to={to} key={name}>
              <Button color={pathname === to ? "error" : "inherit"}>
                {name.replace(/-/g, " ")}
              </Button>
            </Link>
          );
        })}
      </div>
    </Box>
  );
}
