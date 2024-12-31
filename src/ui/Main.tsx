import { Box } from "@mui/material";

function Main() {
  return (
    <Box>
      Main: doesn't need any container, it should be a box with "main" tag /
      then have a header and the main part / I don't knoe about outlet
      yet//////////////////// Lorem ipsum dolor sit amet, consectetur
      adipisicing elit. Velit, distinctio aliquam ab reprehenderit error
      sapiente iure. Quo aperiam nostrum debitis est, harum soluta excepturi
      voluptates minus voluptatem! Eligendi, error ea?
    </Box>
  );
}

export default Main;
//////////////////////////////////////
// the original

// import { ReactNode } from "react";
// import { Box, Toolbar } from "@mui/material";
// import { styled } from "@mui/material/styles";

// import { MAIN_WIDTH } from "../utils/constants.ts";
// import MainHeader from "./ainHeader.tsx";

// interface MainProps {
//   children: ReactNode;
// }

// const MainLayout = styled("main")({
//   flexGrow: 1,
//   bgcolor: "background.default",
// });

// const MainContainer = styled("main")({
//   maxWidth: MAIN_WIDTH,
//   bgcolor: "background.paper",
//   p: 4,
// });

// function Main({ children }: MainProps) {
//   return (
//     <MainLayout>
//       <MainContainer>
//         {/* <Toolbar /> */}
//         <MainHeader />

//         {children}
//       </MainContainer>
//     </MainLayout>
//   );
// }

// export default MainContainer;
///////////////////////////////////////
// the original before styled container

// import { ReactNode } from "react";
// import { Box, Toolbar } from "@mui/material";
// import { MAIN_WIDTH } from "../utils/constants.ts";

// interface MainProps {
//   children: ReactNode;
// }

// export default function Main({ children }: MainProps) {
//   return (
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         bgcolor: "background.default",
//       }}
//     >
//       <Box
//         sx={{
//           maxWidth: MAIN_WIDTH,
//           bgcolor: "background.paper",
//           p: 4,
//         }}
//       >
//         <Toolbar />
//         {children}
//       </Box>
//     </Box>
//   );
// }
