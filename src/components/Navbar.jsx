import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import background from '../assets/img/footer.png';
import logo from '../assets/img/logo-branca.png'; 

const drawerWidth = 240;

const itemPaths = {
  
  INÍCIO: 'https://projetodesenvolve.edusense.app/#/platform/home',
  SUPORTE: 'https://ajuda-projetodesenvolve.freshdesk.com/support/login',
};

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {Object.entries(itemPaths).map(([itemName, path]) => (
          <ListItem key={itemName} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <a href={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={itemName} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ fontFamily: 'Rajdhani',background: `url(${background})`, backgroundSize: 'cover' }}>
        <Toolbar sx={{ fontFamily: 'Rajdhani',display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ fontFamily: 'Rajdhani',display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'block', sm: 'none' }, marginLeft: 'auto' }}>
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ fontFamily: 'Rajdhani',display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
              {Object.entries(itemPaths).map(([itemName, path]) => (
                <Button key={itemName} sx={{ color: '#fff', marginLeft: '10px' }} component="a" href={path}>
                  {itemName}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
