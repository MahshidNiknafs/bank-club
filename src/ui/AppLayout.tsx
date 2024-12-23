import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

export default function AppLayout() {
  return (
    <Box sx={{ display: "flex", direction: "rtl" }}>
      <CssBaseline />
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent Drawer
          </Typography>
        </Toolbar>
        </AppBar> */}

      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {["صفحه اصلی", "تخفیف ها", "ارسال ایمیل", "پیش نویس"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ textAlign: "right" }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
        }}
      >
        <Toolbar />
        <Typography paragraph>
          محتوای اصلی اینجاست و به درستی در RTL قرار می‌گیرد.
        </Typography>
      </Box>
    </Box>
  );
}

////////////////////////
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// const drawerWidth = 240;

// // export default function PermanentDrawerRight() {
// export default function AppLayout() {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       <AppBar
//         position="fixed"
//         sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             Permanent drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//         variant="permanent"
//         anchor="right"
//       >
//         <Toolbar />
//         <Divider />
//         <List>
//           {["صفحه اصلی", "تخفیف ها", "Send email", "Drafts"].map(
//             (text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             )
//           )}
//         </List>
//         <Divider />
//         <List>
//           {["All mail", "Trash", "Spam"].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>

//       <Box
//         component="main"
//         // sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
//         sx={{
//           //   width: `calc(100% - ${drawerWidth}px)`,
//           //   width: "100rem",
//           flexGrow: 1,
//           height: "100vh",
//           bgcolor: "pink",
//           p: 3,
//         }}
//       >
//         <Toolbar />
//         <Typography sx={{ marginBottom: 2 }}>
//           استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
//         </Typography>
//         <Typography sx={{ marginBottom: 2 }}>
//           لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
/////////////////////////////

// import { Typography } from "@mui/material";

// function AppLayout() {
//   return <Typography color="primary">AppLayout</Typography>;
// }

// export default AppLayout;
