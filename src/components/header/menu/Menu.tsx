import { Movie } from "@mui/icons-material"
import { Typography, Box, Button } from "@mui/material"
import type { Section } from "../../landing-page/LandingPage";
import type { HandleMenuItemClick } from "../Header";

interface IMenu {
    sections: Section[];
    handleMenuItemClick: (args: HandleMenuItemClick) => void;
}

export const Menu = ({sections, handleMenuItemClick}: IMenu) => {
    return <>
        <Movie sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} data-testid="menu-icon"/>
        <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}
        >
            JEN BENDLE
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {sections.map((section, i) => (
                <Button
                key={section.title}
                onClick={(e) => handleMenuItemClick({_e: e, i})}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                {section.title}
                </Button>
            ))}
        </Box>
    </>
}
