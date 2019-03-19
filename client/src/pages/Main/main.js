import React, { Component } from "react";
import {Grid, Paper, TextField, Button} from '@material-ui/core';
//import CssBaseline from '@material-ui/core/CssBaseline';
import "./main.css";

class Main extends Component{

    state ={
        inputUrl: ''
    }

    handleChange = inputUrl => event => {
        this.setState({ [inputUrl]: event.target.value });
    };

    handleSubmit = () =>{
        const userInput = {
            originalUrl: this.state.inputUrl
          };
        console.log(userInput);
    }

    render(){
        return(
            <div className='wrapper'>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={12}>
                        <Paper className="inputBox">
                            <TextField
                                id="input-url"
                                label="Input Url To Shorten"
                                placeholder="Enter URL"
                                className="inputField"
                                value={this.state.inputUrl}
                                onChange={this.handleChange('inputUrl')}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                variant="outlined"
                            />
                            <Button 
                                variant="contained" 
                                color="primary" 
                                className="submitBtn"
                                onClick={this.handleSubmit}
                            >
                                Shorten
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className="inputBox">
                            <TextField
                                id="input-url"
                                label="Shortened URL"
                                placeholder="Short URL"
                                className="inputField"
                                margin="normal"
                                disabled={true}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                fullWidth
                                variant="outlined"
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            
        );
    }
}

export default Main;