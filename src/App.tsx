import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { AppTheme } from "./AppTheme";
import { BioPage, HomePage } from "./Pages";

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/biography" element={<BioPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
