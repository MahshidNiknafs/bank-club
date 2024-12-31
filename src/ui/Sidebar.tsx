import {
  Drawer,
  Toolbar,
  // Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { DRAWER_WIDTH } from "../utils/constants";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          bgcolor: "background.paper",
          position: "absolute",
          right: "2rem",
          top: 0,
          height: "auto",
          maxHeight: "100vh",
          border: "none",
        },
      }}
    >
      <Toolbar />
      {/* <Divider /> */}
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
  );
}
