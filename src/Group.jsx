import { Button, Grid, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Slot from "./Slot";

function Group({ group, setGroups, index }) {
    const handleRemove = () => {
        setGroups((prev) => {
            var list = [...prev];
            list.splice(index, 1);
            return list;
        });
    };

    const handleChangeLabel = (e) => {
        const { name, value } = e.target;
        setGroups((prev) => {
            var list = [...prev];
            list[index] = { ...list[index], [name]: value };
            return list;
        });
    };

    const handeChangeSlot = (e, slotIndex) => {
        const { name, value } = e.target;

        console.log(name, value);

        setGroups((prev) => {
            var list = [...prev];
            list[index].slots[slotIndex][name] = value;
            return list;
        });
    };

    const handleAddSlot = () => {
        setGroups((prev) => {
            var list = [...prev];
            console.log(list[index].slots.push);
            list[index].slots.push({
                key: Math.random(),
                name: "",
            });

            console.log(list);
            return list;
        });
    };

    const handleRemoveSlot = (idx) => {
        setGroups((prev) => {
            var list = [...prev];
            list[index].slots.splice(idx, 1);
            return list;
        });
    };

    return (
        <Grid container columnSpacing={4} rowSpacing={2} p={2}>
            <Grid item xs={12} bgcolor="lightgray">
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h5" align="center">
                            Group {index + 1}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} align="center">
                        <Typography variant="h5" bgcolor="lightgray">
                            Slots
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row" spacing={2}>
                    <Button color="error" variant="contained" onClick={handleRemove}>
                        -
                    </Button>

                    <TextField
                        label={`Group ${index + 1}`}
                        fullWidth
                        value={group.name}
                        name="name"
                        onChange={handleChangeLabel}
                    />
                </Stack>
            </Grid>

            <Grid item xs={6}>
                <Grid container spacing={2}>
                    {group.slots?.map((slot, idx) => (
                        <Grid item xs={12} key={slot.key}>
                            <Slot
                                slot={slot}
                                index={idx}
                                handleChange={(e) => handeChangeSlot(e, idx)}
                                handleRemove={() => handleRemoveSlot(idx)}
                            />
                        </Grid>
                    ))}

                    <Grid item xs={12}>
                        <Button fullWidth size="large" variant="contained" onClick={handleAddSlot}>
                            + Add Slot
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Group;
