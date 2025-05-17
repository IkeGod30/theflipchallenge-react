import * as React from "react";

// MUI Imports //
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

// Component Imports //
import Logout from "./Nav/Log/Logout";
import DeleteAccount from "./Nav/Log/DeleteAccount/DeleteAccount";
import UpdatePassword from "./Nav/Log/ChangePassword/ChangePassword";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    // top: false,
    // left: false,
    // bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              alert("Account Setting");
            }}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            {"Account Setting"}
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {[<UpdatePassword />, <DeleteAccount />, <Logout />].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
        {/* <Logout /> */}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{
              borderRadius: "15px",
              backgroundColor: "black",
              color: "green",
              padding: "15px",
              fontWeight: "bolder",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            My Account Settings
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
