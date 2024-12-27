import { Outlet } from "react-router";
import { Box } from "@mui/material";

import StyledDrawer from "./StyledDrawer.tsx";
import Main from "./Main.tsx";

export default function AppLayout() {
  return (
    <Box height="100vh" sx={{ display: "flex" }}>
      <StyledDrawer />
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
}
