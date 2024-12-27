import { ReactNode } from "react";
import { Box, Toolbar } from "@mui/material";
import { MAIN_WIDTH } from "../utils/constants.ts";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          maxWidth: MAIN_WIDTH,
          bgcolor: "background.paper",
          p: 4,
        }}
      >
        <Toolbar />
        {children}

        {/* <Typography>
          محتوای اصلی اینجاست و به درستی در RTL قرار می‌گیرد.
        </Typography> */}
      </Box>
    </Box>
  );
}
