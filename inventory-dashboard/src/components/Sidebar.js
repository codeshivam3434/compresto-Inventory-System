
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Typography, Divider } from '@mui/material';
import { Home, ListAlt, Add, Report } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

// Styled components
const SidebarContainer = styled(Drawer)(({ theme }) => ({
  backgroundColor: '#282c34',
  color: '#ffffff',
  width: 240,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: 240,
    backgroundColor: '#282c34',
    color: '#ffffff',
    boxSizing: 'border-box',
  },
}));

const LogoContainer = styled('div')({
  padding: '16px',
  textAlign: 'center',
  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
  marginBottom: '16px', // Added margin for spacing
});

const AppName = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '1.8rem', // Increased font size
  color: '#4caf50', // Green color for the app name
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Added shadow for depth
  letterSpacing: '1px', // Slight spacing between letters
});

const Subtitle = styled(Typography)({
  fontSize: '0.9rem',
  color: '#9e9e9e', // Lighter color for the subtitle
  marginBottom: '8px',
});

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  '&:hover': {
    backgroundColor: '#3e3e3e', // Slightly lighter on hover
  },
  backgroundColor: active ? '#66bb6a' : 'transparent', // Lighter highlight for active item
  color: active ? '#ffffff' : '#ffffff', // Active item text color
}));

function Sidebar() {
  const location = useLocation(); // Get the current location

  return (
    <SidebarContainer variant="permanent">
      {/* Company Name */}
      <LogoContainer>
        <AppName variant="h5">Compresto</AppName>
        <Subtitle>Inventory Solution</Subtitle>
      </LogoContainer>
      <Divider />

      <List>
        <StyledListItem button component={Link} to="/" active={location.pathname === '/'}>
          <ListItemIcon><Home style={{ color: location.pathname === '/' ? '#ffffff' : '#4caf50' }} /></ListItemIcon>
          <ListItemText primary="Home" />
        </StyledListItem>
        <StyledListItem button component={Link} to="/all-products" active={location.pathname === '/all-products'}>
          <ListItemIcon><ListAlt style={{ color: location.pathname === '/all-products' ? '#ffffff' : '#4caf50' }} /></ListItemIcon>
          <ListItemText primary="All Products" />
        </StyledListItem>
        <StyledListItem button component={Link} to="/low-stock" active={location.pathname === '/low-stock'}>
          <ListItemIcon><Report style={{ color: location.pathname === '/low-stock' ? '#ffffff' : '#4caf50' }} /></ListItemIcon>
          <ListItemText primary="Low Stock Products" />
        </StyledListItem>
        <StyledListItem button component={Link} to="/add-product" active={location.pathname === '/add-product'}>
          <ListItemIcon><Add style={{ color: location.pathname === '/add-product' ? '#ffffff' : '#4caf50' }} /></ListItemIcon>
          <ListItemText primary="Add Product" />
        </StyledListItem>
      </List>
    </SidebarContainer>
  );
}

export default Sidebar;
