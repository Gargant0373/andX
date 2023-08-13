import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorHandler from "./ErrorHandler";

function Join() {
    const location = useLocation();
    const nav = useNavigate();

    if (!location.state) {
        nav("/");
        return <ErrorHandler message="No name provided" />
    }

    return (
        <Grid container spacing={3} xs={12}>
            <Grid item xs={8} md={3}>
                <Data name={location.state.name} />
            </Grid>
            <Grid item xs={4}>
                <Options />
            </Grid>
        </Grid>
    )
}

function Data(props: { name: string }) {
    return (
        <Grid container xs={12}>
            <Grid item xs={12}>
                <Typography variant="h5">Your Stats</Typography>
            </Grid>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>{props.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Wins</TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Losses</TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Draws</TableCell>
                            <TableCell>0</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

function Options() {
    return (
        <Grid container spacing={3} xs={12}>
            <Grid item xs={4}>
                <Button variant="contained">Play Local</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained">Multiplayer</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant="contained">Play Bot</Button>
            </Grid>
        </Grid>
    )
}

export default Join;