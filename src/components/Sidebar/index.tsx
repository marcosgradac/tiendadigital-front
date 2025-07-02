import { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import {
  Dashboard,
  CalendarMonth,
  BarChart,
  Description,
  Chat,
  Logout,
  Menu,
} from "@mui/icons-material";
import styles from "./Sidebar.module.scss";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
  { label: "Schedule", icon: <CalendarMonth />, path: "/schedule" },
  { label: "Reports", icon: <BarChart />, path: "/reports" },
  { label: "Documents", icon: <Description />, path: "/documents" },
  { label: "Messages", icon: <Chat />, path: "/messages" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggle = () => setCollapsed(!collapsed);

  return (
    <Box className={clsx(styles.sidebar, collapsed && styles.collapsed)}>
      <Box className={styles.top}>
        <Box className={styles.avatarBox}>
          <Avatar
            src="https://i.pravatar.cc/150?img=8"
            sx={{ width: 48, height: 48 }}
          />
          {!collapsed && <span className={styles.userName}>Hola, Goku</span>}
        </Box>
        <IconButton onClick={toggle} className={styles.toggleBtn}>
          <Menu />
        </IconButton>
      </Box>

      <Divider className={styles.divider} />

      <List className={styles.nav}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Tooltip
              title={collapsed ? item.label : ""}
              placement="right"
              arrow
              key={item.label}
            >
              <ListItemButton
                className={clsx(styles.item, isActive && styles.active)}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon className={styles.icon}>{item.icon}</ListItemIcon>
                {!collapsed && <ListItemText primary={item.label} />}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>

      <Box className={styles.logout}>
        <Tooltip title={collapsed ? "Log Out" : ""} placement="right" arrow>
          <ListItemButton
            className={styles.item}
            onClick={() => navigate("/logout")}
          >
            <ListItemIcon className={styles.icon}>
              <Logout />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Log Out" />}
          </ListItemButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
