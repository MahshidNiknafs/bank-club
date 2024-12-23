import { ThemeProvider } from "@mui/material";

import theme from "./theme";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
