import {
  Box,
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { LAYOUT_SIDE_WIDTH, DRAWER_WIDTH } from "../utils/constants";

export default function StyledDrawer() {
  return (
    <Box sx={{ width: LAYOUT_SIDE_WIDTH, bgcolor: "background.default" }}>
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            bgcolor: "background.paper",
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
    </Box>

    // <Drawer
    //   variant="permanent"
    //   anchor="right"
    //   sx={{
    //     flexShrink: 0,
    //     "& .MuiDrawer-paper": {
    //       width: DRAWER_WIDTH,
    //       bgcolor: "background.paper",
    //     },
    //   }}
    // >
    //   <Toolbar />
    //   <Divider />
    //   <List>
    //     {["صفحه اصلی", "تخفیف ها", "ارسال ایمیل", "پیش نویس"].map(
    //       (text, index) => (
    //         <ListItem key={text} disablePadding>
    //           <ListItemButton>
    //             <ListItemIcon sx={{ justifyContent: "flex-end" }}>
    //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //             </ListItemIcon>
    //             <ListItemText primary={text} sx={{ textAlign: "right" }} />
    //           </ListItemButton>
    //         </ListItem>
    //       )
    //     )}
    //   </List>
    // </Drawer>
  );
}
