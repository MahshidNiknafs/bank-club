import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import theme from "./theme";
import AppLayout from "./ui/AppLayout";
import MerchantsPage from "./pages/MerchantsPage";

const routesConfig = [
  { path: "merchant", element: <MerchantsPage /> },
  // { path: "products", element: <ProductsPage /> },
  // Add more routes here
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {/* Redirect index route */}
            <Route index element={<Navigate replace to="merchant" />} />

            {/* Dynamically generated routes */}
            {routesConfig.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
