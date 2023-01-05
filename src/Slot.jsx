import { Button, Grid, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Slot({ slot, index, handleRemove, handleChange }) {
    return (
        <Stack direction="row" spacing={2}>
            <TextField
                label={`Slot ${index + 1}`}
                size="small"
                fullWidth
                value={slot.name}
                name="name"
                onChange={handleChange}
            />
            <Button color="error" variant="contained" onClick={handleRemove}>
                -
            </Button>
        </Stack>
    );
}

export default Slot;
