import { Alert, Button, Collapse, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

function Homepage() {
    return (
        <Grid container spacing={3} xs={12}>
            <Grid item xs={12} display="flex" justifyContent="center" marginTop="30px">
                <Typography variant="h3">andX</Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" textAlign="center" marginTop="25px">
                <NameArea />
            </Grid>
        </Grid>
    )
}

function NameArea() {
    const nav = useNavigate();

    let [name, setName] = useState("");
    let [open, setOpen] = useState(false);

    let submit = () => {
        if (!name) {
            setOpen(true);
            return;
        }
        nav("/join", { state: { name } });
    }

    return (
        <Grid container xs={12} spacing={2}>
            <Grid item xs={12}>
                <Typography variant="button">Enter your fucking name.</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <Button variant="outlined" onClick={() => submit()}>Submit</Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
                <Collapse in={open}>
                    <Alert severity="error"
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }>
                        Please enter your name.
                    </Alert>
                </Collapse>
            </Grid>
        </Grid>
    )
}

export default Homepage;