import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Footer from './Footer';

import {
  BrowserRouter,
  Routes,
  Route
}
  from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
