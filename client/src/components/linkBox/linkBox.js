import React from "react";
import {Grid, Paper, TextField} from '@material-ui/core';

const linkBox = props => {
    <Grid container spacing={24}>
        <Grid item xs={12}>
            <Paper>
                <TextField
                    id={props.id}
                    label={props.label}
                    placeholder={props.placeholder}
                    className={props.className}
                    value={props.value}
                    onChange={props.handleChange("inputUrl")}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                    variant="outlined"
                />
            </Paper>
        </Grid>
    </Grid>
};

export default StockList;
