import './NavBar.css'
import medcloudLogo from '../assets/medcloud-white.svg';
import menuButton from '../assets/menu.svg'
import { useState } from 'react';
import { Avatar, Box, Button, Drawer, Typography } from '@mui/material';


function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const inMenuButtonStyle = {
    color: '#fff',
    padding: '1rem'
  }
  return (
    <>
      <nav>
        <button
          className='open-menu-button'
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <img src={menuButton} alt='open-menu-button' />
        </button>
        <img src={medcloudLogo} alt='logo-medcloud' className='main-logo' />
      </nav>
      <Drawer
        anchor='left'
        className='main-drawer'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          className='drawer'
          p={2}
          width='200px'
          height={'100%'}
          textAlign={'center'}
          role='presentation'>
          <Typography variant='h5' component='div' className='menu-typo'>
            Menu
          </Typography>
          <div className='divider' >
            <Button className='in-menu-button'
              style={inMenuButtonStyle}
            >
              Pacientes
            </Button>
            <Button className='in-menu-button'
              style={inMenuButtonStyle}
            >
              Sobre
            </Button>
          </div>
          <Box className='user-info'>
            <Avatar alt='user-picture' />
            <Typography variant='body1' component='div' className='user-name'>
              Nome do usuário
            </Typography>
          </Box>
        </Box>
    
      </Drawer >
    </>
  )
}

export default NavBar;