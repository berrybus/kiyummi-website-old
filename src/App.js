import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
