// // import React from 'react';
// // import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
// // import { styled, alpha } from '@mui/material/styles';

// // const Search = styled('div')(({ theme }) => ({
// //   position: 'relative',
// //   borderRadius: theme.shape.borderRadius,
// //   backgroundColor: alpha(theme.palette.common.white, 0.15),
// //   '&:hover': {
// //     backgroundColor: alpha(theme.palette.common.white, 0.25),
// //   },
// //   marginLeft: 0,
// //   width: '100%',
// //   [theme.breakpoints.up('sm')]: {
// //     marginLeft: theme.spacing(1),
// //     width: 'auto',
// //   },
// // }));

// // const SearchIconWrapper = styled('div')(({ theme }) => ({
// //   padding: theme.spacing(0, 2),
// //   height: '100%',
// //   position: 'absolute',
// //   pointerEvents: 'none',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// // }));

// // const StyledInputBase = styled(InputBase)(({ theme }) => ({
// //   color: 'inherit',
// //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// //   width: '100%',
// // }));

// // function Navbar() {
// //   return (
// //     <AppBar position="static">
// //       <Toolbar>
// //         <Typography variant="h6" noWrap>
// //           Inventory Dashboard
// //         </Typography>
// //         <Search>
// //           <SearchIconWrapper>
// //             <i className="fas fa-search"></i> {/* Using Font Awesome */}
// //           </SearchIconWrapper>
// //           <StyledInputBase
// //             placeholder="Search products…"
// //             inputProps={{ 'aria-label': 'search' }}
// //           />
// //         </Search>
// //       </Toolbar>
// //     </AppBar>
// //   );
// // }
// // version----1
// // export default Navbar;
// import React from 'react';
// import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
// import { styled, alpha } from '@mui/material/styles';

// // Custom styled components for search box and icons
// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha('#4caf50', 0.15), // Use the same green for accents
//   '&:hover': {
//     backgroundColor: alpha('#4caf50', 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//   width: '100%',
//   backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light background for input
//   borderRadius: '4px',
// }));

// // Updated Navbar component to match sidebar theme
// function Navbar() {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: '#282c34', color: '#ffffff' }}>
//       <Toolbar>
//         <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
//           Inventory Dashboard
//         </Typography>
//         <Search>
//           <SearchIconWrapper>
//             <i className="fas fa-search" style={{ color: '#ffffff' }}></i> {/* Font Awesome Search Icon */}
//           </SearchIconWrapper>
//           <StyledInputBase
//             placeholder="Search products…"
//             inputProps={{ 'aria-label': 'search' }}
//           />
//         </Search>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#282c34', color: '#ffffff' }}>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Inventory Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
