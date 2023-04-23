import { Movie, Menu as MenuIcon } from "@mui/icons-material";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import React from "react";
import { Section } from "../../landing-page/LandingPage";
import type { HandleMenuItemClick } from "../Header";

interface IMobileMenu {
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    anchorElNav: HTMLElement | null;
    handleCloseNavMenu: () => void;
    sections: Section[];
    handleMenuItemClick: (args: HandleMenuItemClick) => void;
}

export const MobileMenu = ({
    handleOpenNavMenu,
    anchorElNav,
    handleCloseNavMenu,
    sections,
    handleMenuItemClick
}: IMobileMenu) => {
    return (<>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="mobile menu"
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
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
                display: { xs: 'block', md: 'none' },
            }}
            >
            {sections.map((section, i) => (
                <MenuItem key={section.title} onClick={(e) => handleMenuItemClick({_e: e, i})}>
                <Typography textAlign="center">{section.title}</Typography>
                </MenuItem>
            ))}
            </Menu>
        </Box>
        <Movie sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            }}
        >
            LOGO
        </Typography>
    </>)
}
