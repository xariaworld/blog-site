import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { Box } from "@mui/material";

interface NavItem {
  name: string;
  to: string;
}

const items: NavItem[] = [
  {
    name: "home",
    to: "/",
  },
  {
    name: "technology",
    to: "/technology",
  },
  {
    name: "reviews",
    to: "/reviews",
  },
  {
    name: "ai",
    to: "/ai",
  },
  {
    name: "mobile",
    to: "/mobile",
  },
  {
    name: "startups",
    to: "/startups",
  },
  {
    name: "social-media",
    to: "/social-media",
  },
];

export function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Box component="header" className={classes.root}>
      <Link to="/">
        <Box className={classes.logo}>
          <img src="logo.webp" alt="the byte 404 logo" />
        </Box>
      </Link>
      <div>
        {items.map(({ name, to }) => {
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
