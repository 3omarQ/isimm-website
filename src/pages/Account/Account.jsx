import React from "react";
import Sidebar from "../../components/SideBar/sidebar";
import Profile from "./Profile/Profile";
import Schedule from "./Schedule/Schedule";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { Switch, Routes, Route } from "react-router-dom";
import Inbox from "./Inbox/Inbox";
import Notes from "./Notes/Notes";

function Account() {
  return (
    <div className="profile">
      <div className="entete"></div>
      <Box sx={{ display: "flex" }} position="relative">
        <Sidebar></Sidebar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Switch>
            <Route path="/account/schedule" component={Schedule} />
            <Route path="/account/inbox" component={Inbox} />
            <Route path="/account/notes" component={Notes} />
            <Route path="/account/" component={Profile} />
          </Switch>
        </Box>
      </Box>
    </div>
  );
}

export default Account;
