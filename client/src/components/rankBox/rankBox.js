import React from "react";
import {Grid, ListItem, Typography, List, ListItemText, Paper} from '@material-ui/core';
import "./rankBox.css";



const rankBox = props => (
    <Grid container spacing={0}>
          <Grid item xs={12}>
            <Paper className="paperBox">
                <Typography variant="h6" className="listTitle">
                    {props.title}
                </Typography>
                <div className="listSection">
                <List>
                    <ListItem>
                        <Grid item xs={10}>
                            <ListItemText
                            primary={props.item[0].url}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <ListItemText
                            primary={props.item[0].number}
                            />
                        </Grid>
                    </ListItem>
                    <ListItem>
                       <Grid item xs={10}>
                            <ListItemText
                            primary={props.item[1].url}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <ListItemText
                            primary={props.item[1].number}
                            />
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid item xs={10}>
                            <ListItemText
                            primary={props.item[2].url}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <ListItemText
                            primary={props.item[2].number}
                            />
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid item xs={10}>
                            <ListItemText
                            primary={props.item[3].url}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <ListItemText
                            primary={props.item[3].number}
                            />
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid item xs={10}>
                            <ListItemText
                            primary={props.item[4].url}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <ListItemText
                            primary={props.item[4].number}
                            />
                        </Grid>
                    </ListItem>
                </List>
                </div>
            </Paper>
          </Grid>
    </Grid>
);

export default rankBox;
