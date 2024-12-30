import React from "react";

export default function Main() {
  return <div>Main</div>;
}

// import { ReactNode } from "react";
// import { Box, Toolbar } from "@mui/material";
// import { styled } from "@mui/material/styles";

// import { MAIN_WIDTH } from "../utils/constants.ts";
// import MainHeader from "./ainHeader.tsx";

// interface MainProps {
//   children: ReactNode;
// }

// // const MainContainer = styled("main")({
// //   // flexGrow: 1,
// //   // bgcolor: "background.default",
// // });

// const MainContainer = styled("main")({
//   maxWidth: MAIN_WIDTH,
//   bgcolor: "background.paper",
//   p: 4,
// });

// export default function Main({ children }: MainProps) {
//   return (
//     // <MainContainer>

//     /* <MainHeader /> */

//     <MainContainer>{children}</MainContainer>
//     // </MainContainer>
//   );
// }
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

// export default function Main({ children }: MainProps) {
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
