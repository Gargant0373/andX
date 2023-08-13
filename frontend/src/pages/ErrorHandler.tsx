import { Grid, Typography } from "@mui/material";

function ErrorHandler(props: {message: string}) {
    return (
        <Grid container spacing={2} marginTop="50px" display="flex" justifyContent="center" >
            <Grid item xs={12}>
                <Typography variant="h1">Error</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3">{props.message}</Typography>
            </Grid>
        </Grid >
    )
}

export default ErrorHandler;