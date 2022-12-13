import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Link from "next/link"

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const pages = [
  { name: "Home", url: "./" },
  { name: "Solidity", url: "./solidity" }
];

const AppBarCC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const redirect = (url) => {
    location.href = url;
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: 'end'}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
              <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link href={page.url}>
                      <Typography textAlign="center" textTransform="capitalize">
                        {page.name}
                      
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", paddingLeft: '3em' }, justifyContent: 'end', alignItems: 'center'}}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", textTransform: 'capitalize', mr: 1 }}
                >
                      <Typography textAlign="center" onClick={()=>redirect(page.url)} fontSize= '14px'>
                        {page.name}
                      
                      </Typography>
                </Button>
              ))}
            </Box> 
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default AppBarCC;
