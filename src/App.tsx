import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ArticlePage } from "./pages/ArticlePage";
import { ARTICLE_PAGES } from "./constants";
import { Footer } from "./components/Footer";
import { Box } from "@mui/material";
import { Contact } from "./pages/Contact";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { useTitle } from "./hooks/useTitle";
import { useScrollToTopOnNav } from "./hooks/useScrollToTopOnNav";
import { Statement } from "./pages/Statement";

function App() {
  const { pathname } = useLocation();

  useTitle({ pathname });
  useScrollToTopOnNav({ pathname });
  console.log("ARTICLE_PAGES", ARTICLE_PAGES);

  return (
    <>
      <Navbar />

      <Box component="main" m="20px" width="100%" mx="auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/privacy" element={<Privacy />} />
          {ARTICLE_PAGES.map(({ to }) => {
            console.log("to", to);
            return (
              <Route
                key={to}
                path={"/" + to}
                element={<ArticlePage page={to} />}
              />
            );
          })}
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
