import React, { MutableRefObject } from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import { Section } from "../landing-page/LandingPage";
import { MobileMenu } from "./menu/MobileMenu";
import { Menu } from "./menu/Menu";

export const headerMenuId = 'header-menu';

interface IHeader {
    sections: Section[];
    sectionRefs: MutableRefObject<(HTMLElement | null)[]>;
}
export interface HandleMenuItemClick {
    _e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLLIElement, MouseEvent>;
    i: number;
}

export const Header = ({sections, sectionRefs}: IHeader) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenuItemClick = ({_e, i}: HandleMenuItemClick) => {
        setAnchorElNav(null);
        const section = sectionRefs.current[i];
        window.scrollTo({
            top: (section?.offsetTop || 0),
            behavior: 'smooth',
        })
    }

  return (
    <AppBar id={headerMenuId} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <MobileMenu
                handleOpenNavMenu={handleOpenNavMenu}
                anchorElNav={anchorElNav}
                handleCloseNavMenu={handleCloseNavMenu}
                sections={sections}
                handleMenuItemClick={handleMenuItemClick}
            />
            <Menu sections={sections} handleMenuItemClick={handleMenuItemClick} />
        </Toolbar>
      </Container>
    </AppBar>
    );
}
