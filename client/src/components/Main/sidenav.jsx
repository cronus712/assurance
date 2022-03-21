import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import TableChartRounded from "@material-ui/icons/TableChartRounded";
import TypesTable from "./TypesTable";
import logo from "./logoBrand1.png";
import styles from "./styles.module.css";
import HomeOutlined from "@material-ui/icons/HomeOutlined";
import CategoryOutlined from "@material-ui/icons/CategoryOutlined";
import PersonOutlined from "@material-ui/icons/PersonOutlined";
import SettingsOutlined from "@material-ui/icons/SettingsOutlined";
import CreditCardOutlined from "@material-ui/icons/CreditCardOutlined";
import FolderOutlined from "@material-ui/icons/FolderOutlined";
import HistoryOutlined from "@material-ui/icons/HistoryOutlined";

const drawerWidth = 220;

export default function Sidenav() {
  return (
    <Box className="Sidenav" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <Divider />
        <List>
          <ListItem button>
            <HomeOutlined /> <div className={styles.navItem}> Home </div>
          </ListItem>

          <ListItem button>
            <CategoryOutlined />
            <div className={styles.navItem}> Categories </div>
          </ListItem>

          <ListItem button>
            <PersonOutlined /> <div className={styles.navItem}> Profile </div>
          </ListItem>

          <ListItem button>
            <SettingsOutlined />{" "}
            <div className={styles.navItem}> Settings </div>
          </ListItem>
        </List>

        <Divider />
        <Divider />
        <List>
          <ListItem button>
            <CreditCardOutlined />{" "}
            <div className={styles.navItem}> Payment </div>
          </ListItem>

          <ListItem button>
            <FolderOutlined />
            <div className={styles.navItem}> Offers </div>
          </ListItem>

          <ListItem button>
            <HistoryOutlined /> <div className={styles.navItem}> History </div>
          </ListItem>
        </List>
      </Drawer>
      <TypesTable />
    </Box>
  );
}
