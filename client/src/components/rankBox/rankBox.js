import React from "react";
import {Grid, ListItem, Typography, List, ListItemText} from '@material-ui/core';




const rankBox = props => (
    <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="listTitle">
                {props.title}
            </Typography>
            <div className="listSection">
              <List>
                  <ListItem>
                    <ListItemText
                      primary={props.item[0].url}
                    />
                    <ListItemText
                      primary={props.item[0].number}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={props.item[1].url}
                    />
                    <ListItemText
                      primary={props.item[1].number}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={props.item[2].url}
                    />
                    <ListItemText
                      primary={props.item[2].number}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={props.item[3].url}
                    />
                    <ListItemText
                      primary={props.item[3].number}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={props.item[4].url}
                    />
                    <ListItemText
                      primary={props.item[4].number}
                    />
                  </ListItem>
              </List>
            </div>
          </Grid>
    </Grid>
);

export default rankBox;
