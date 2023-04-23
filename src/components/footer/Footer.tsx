import { Typography, Link, Grid, Divider } from "@mui/material";

export const Footer = () => {
  return (
    <Grid item container justifyContent={'center'} alignContent={'center'} padding={2}>
        <Divider />
        <footer>
            <Typography variant="body2">
                © {new Date().getFullYear()} Jennifer Bendle. All Rights Reserved.
            </Typography>
            <Typography variant="body2">
                Website by <Link href="https://github.com/edelauna/jbendle">edelauna</Link>
            </Typography>
        </footer>
    </Grid>
  );
};
