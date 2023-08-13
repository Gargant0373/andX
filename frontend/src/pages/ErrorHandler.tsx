import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ErrorHandler(props: { message: string }) {
    let nav = useNavigate();
    
    return (
        <Grid container spacing={2} marginTop="50px">
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h3" color="red">Oopsie!</Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h5">{props.message}</Typography>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                <Button variant="contained" color="error" onClick={() => nav(".")}>Go Back!</Button>
            </Grid>
        </Grid >
    )
}

export default ErrorHandler;