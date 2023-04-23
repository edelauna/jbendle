import {  Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material"
import { works } from "./data/work";

export const Work = () => {
    const iframeHeight = '315';
    return (<Grid container padding={8}>
        <Grid item xs={12}>
        <Typography variant="h1">Work</Typography>
        </Grid>
        {works.map((work, i) => (
            <Grid key={i} item xs={12} sm={4} padding={2}>
                <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                    <CardActionArea>
                        <CardContent>
                        <iframe
                            width="100%"
                            height={iframeHeight}
                            src={work.src}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen />
                        <Typography gutterBottom variant="h5" component="div">
                            {work.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {work.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        ))}
    </Grid>)
}
