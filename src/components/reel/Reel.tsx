import { Box } from "@mui/material";

export const Reel = () => {
    return (
        <Box sx={{
            height: '100vh',
            width: '100vw'
        }}>
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/RIpKBZ9lF8c?autoplay=1"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen />
        </Box>
    );
}

