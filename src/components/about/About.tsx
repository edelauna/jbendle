import { Grid, Typography } from "@mui/material";

export const About = () => (
    <Grid container padding={8}>
        <Grid item xs={12}>
            <Typography variant="h1">About</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <img src={process.env.PUBLIC_URL + "/jen_bendle.jpg"} alt="Jennifer Bendle" style={{ maxWidth: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={8} paddingLeft={8} paddingRight={8}>
            <Typography variant="h6">Jen Bendle</Typography>
            <Typography variant="body1">
                Jennifer Bendle is a local film maker and climber who is passionate about challenging gender stereotypes in the sport of climbing. She has recently been selected to showcase her first production at the Guelph Grotto, an event that features female climbers sharing their personal journeys in a traditionally male-dominated sport. Through her work, Jennifer hopes to change the narrative around climbing and sports in general, encouraging individuals to focus on their own experiences and be true to themselves.<br /><br />
            </Typography>
            <Typography variant="body1">
                Aside from climbing and film-making, Jennifer enjoys engaging in conversations about individual experiences with climbing and sports, and how people can challenge themselves in different ways. She is a leader in her community, and her work has helped to showcase leaders in different shapes and forms.<br /><br />
            </Typography>
            <Typography variant="body1">
                In particular, she teamed up with actor, Joshua Bishop, who played a leading role in her student film, Runners, where he portrayed a father who lost his infant child. Joshua has praised Jennifer's creative vision and dedication to bringing meaningful stories to life, and he looks forward to continuing to collaborate with her in the future.
            </Typography>
        </Grid>
    </Grid>
)
