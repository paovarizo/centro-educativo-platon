import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import './AppBarSystem.scss'
import Logo from '../../assets/logo.png'


function AppBarSystem() {

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={Logo} className='Logo' />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <a href='/'>Inicio</a>
            <a>Servicios</a>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
                <a href='/login'>Inicia sesión</a>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
                <button><a href='/register' style={{color: 'white', padding: 0}}>REGISTRATE</a></button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarSystem;
