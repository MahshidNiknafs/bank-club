import { Box } from "@mui/material";
import Sidebar from "./Sidebar";

import { LAYOUT_SIDE_WIDTH, MAIN_WIDTH } from "../utils/constants";
import Header from "./Header";
import Main from "./Main";

function AppLayout() {
  return (
    <Box height="100vh" sx={{ display: "flex", bgcolor: "background.default" }}>
      <Box sx={{ minWidth: LAYOUT_SIDE_WIDTH }}>
        <Sidebar />
      </Box>

      {/* <Main /> */}
      <Box
        sx={{ maxWidth: MAIN_WIDTH, flexGrow: 1, bgcolor: "background.paper" }}
      >
        <Header />
        {/* <Box>MAIN</Box> */}
        <Main />
      </Box>
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
