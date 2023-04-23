import { Alert, TextField, Button, Snackbar, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

interface ContactUsProps {
  emailTo: string;
}

export const Contact: React.FC<ContactUsProps> = ({ emailTo }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(`Web Inquiry from: ${name}`)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;

    setOpen(true);
    setName('');
    setMessage('');
  };

  return (
    <Grid container padding={8}>
        <Grid item xs={12}>
            <Typography variant="h1">Contact</Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
            <Grid item container xs={12} spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    id="name"
                    label="Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows={4}
                    value={message}
                    onChange={event => setMessage(event.target.value)}
                    required
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                    Send
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                    <Alert severity="success">
                    Sending message!
                    </Alert>
                </Snackbar>
                </Grid>
            </Grid>
        </form>
    </Grid>
  );
};
