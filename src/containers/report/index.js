import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { dataBunch, reportBunch } from "../../dataBunches/dataBunch";


const Report = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const subscription = reportBunch.listen({
            reportData: setRows
        });
        return () => subscription?.removeListener();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Button variant="outlined" onClick={() => dataBunch.reset()}>
                Reset All
            </Button>
            <Button variant="outlined" onClick={() => dataBunch.remove()}>
                Remove All
            </Button>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ fontWeight: "bold" }} align="left">Bunch Key Name</TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="right">Listeners Count</TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="right">Subscriptions Count</TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="right">Value</TableCell>
                        <TableCell style={{ fontWeight: "bold" }} align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.dataBunchKeyName}>
                            <TableCell align="left">{row.dataBunchKeyName}</TableCell>
                            <TableCell align="right">{row.listenersCount}</TableCell>
                            <TableCell align="right">{row.subscribersCount}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                            <TableCell style={{ display: "flex" }} align="right">{row.actions}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Report;
