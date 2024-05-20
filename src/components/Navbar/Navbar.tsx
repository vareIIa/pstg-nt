import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../PDLOGO/LOGO"
import ContactSupportIcon from "@mui/icons-material/ContactSupport";


const settings = ["Ajuda Humana", "Falar com IA"];

function Header() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ bgcolor: "#FFF", width: "100%" }}>
      <Container
        maxWidth={false}
        sx={{
          m: 0,
          p: 0,
          py: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              maxWidth: "200px",
              padding: { xs: "1rem", sm: 0 },
            }}
          >
            <Logo/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
