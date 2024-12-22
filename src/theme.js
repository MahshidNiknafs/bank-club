import { createTheme } from "@mui/material/styles";

// primary
// iranzamin-pink/50     "#FFE8F4"   light
// iranzamin-pink/300    "#EE80B8"   border
// iranzamin-pink/500    "#E32B89"   main

// text
//// gray/800    "#1F2937"   header

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      light: "#FFE8F4", // iranzamin-pink/50
      main: "#E32B89", // iranzamin-pink/500
      //   dark: "#002884",
      //   contrastText: "#fff",
      //   contrastText: "#1F2937", // gray/800
      contrastText: "red",
    },
    // secondary: {
    //   light: "#ff7961",
    //   main: "#f44336",
    //   dark: "#ba000d",
    //   contrastText: "#000",
    // },
  },
});
