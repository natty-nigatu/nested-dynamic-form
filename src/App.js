import "./App.css";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import Group from "./Group";

function App() {
    var [groups, setGroups] = useState([]);

    const handleAddGroup = () => {
        setGroups((prev) => [
            ...prev,
            {
                key: Math.random(),
                name: "",
                slots: [],
            },
        ]);
    };

    return (
        <Grid container spacing={4} p={4}>
            <Grid item xs={12}>
                <Typography align="center" variant="h4">
                    Groups / Slots
                </Typography>
            </Grid>

            {groups?.map((group, idx) => (
                <Grid item xs={12} key={idx}>
                    <Group group={group} setGroups={setGroups} index={idx} />
                </Grid>
            ))}

            <Grid item xs={12}>
                <Button fullWidth size="large" variant="contained" onClick={handleAddGroup}>
                    + Add Group
                </Button>
            </Grid>
        </Grid>
    );
}

export default App;
