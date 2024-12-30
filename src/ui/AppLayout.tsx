import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

import { LAYOUT_SIDE_WIDTH } from "../utils/constants";

function AppLayout() {
  return (
    <Box
      height="100vh"
      sx={{
        display: "flex",
        bgcolor: "background.default",
        // bgcolor: "pink",
      }}
    >
      <Box sx={{ width: LAYOUT_SIDE_WIDTH, bgcolor: "violet" }}>
        <Sidebar />
      </Box>
      <Box sx={{ bgcolor: "lightBlue" }}>mai</Box>
    </Box>
  );
}

export default AppLayout;
//////////////////////////////
// the original

// import { Outlet } from "react-router";
// import { Box } from "@mui/material";

// import StyledDrawer from "./StyledDrawer.tsx";
// import Main from "./Main.tsx";

// export default function AppLayout() {
//   return (
//     <Box height="100vh" sx={{ display: "flex" }}>
//       <StyledDrawer />
//       <Main>
//         <Outlet />
//       </Main>
//     </Box>
//   );
// }
