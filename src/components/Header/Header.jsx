import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


import { Link } from 'react-router-dom';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import TheatersIcon from '@mui/icons-material/Theaters';
import WeekendIcon from '@mui/icons-material/Weekend';
import VideocamIcon from '@mui/icons-material/Videocam';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

import styles from './Header.module.scss';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, backgroundColor: '#181c1f', height: "100%", color: "#fff" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={styles.anchor}
    >
                    {/* <a href='/room'>Ваши просмотры</a>
                    <Link to={'/room'}>Комнаты</Link>
                    <Link to={'/films'}>Фильмы</Link>
                    <Link to={'/serials'}>Сериалы</Link>
                    <Link to={'/subscribe'}>Подписки</Link>
                    <Link to={'/youtube'}>YouTube</Link> */}

      <List>
          <ListItem key='Inbox' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TheatersIcon />
              </ListItemIcon>
              <ListItemText primary='Ваши просмотры' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Inbox' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <WeekendIcon />
              </ListItemIcon>
              <ListItemText primary='Комнаты' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Inbox' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VideocamIcon />
              </ListItemIcon>
              <ListItemText primary='Фильмы' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Inbox' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LiveTvIcon />
              </ListItemIcon>
              <ListItemText primary='Сериалы' />
            </ListItemButton>
          </ListItem>

          <ListItem key='Inbox' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <OndemandVideoIcon />
              </ListItemIcon>
              <ListItemText primary='YouTube' />
            </ListItemButton>
          </ListItem>
      </List>

      <Divider />

    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor: "#181c1f"}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            <React.Fragment >
          <Button onClick={toggleDrawer('left', true)}><MenuIcon sx={{color: "#fff"}}/></Button>
          <Drawer
            anchor='left'
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
          {/* </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Family Watch
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}