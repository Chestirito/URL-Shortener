import React, { Component } from "react";
import {Grid, Paper, TextField, Button, Typography} from '@material-ui/core';
//import CssBaseline from '@material-ui/core/CssBaseline';
import "./main.css";
import API from "../../API/api";
import RankBox from "../../components/rankBox";
class Main extends Component{

    state ={
        inputUrl: '',
        shortUrl: '',
        topReq: [],
        topSub: []
    }

    componentDidMount(){
        this.isShortened();
        this.setupRanking();
    }

    isShortened = () =>{
        let url = window.location.href.split("/")[3];
        //let findCode = {};
        let findCode = {shortCode: url};
        
        console.log(findCode);
        if(url !== ""){
            API.findShort(findCode)
                .then(res => {
                    if(res.data){
                        res.data.requested +=1;
                        API.updateSubmitted(res.data)
                        .then(res2=>{
                            console.log(res2);
                            this.setupRanking();
                        })
                        window.location.assign("http://"+res.data.originalUrl);
                    }
                    else{
                        console.log("Page Not Found");
                    }
            })
            .catch(err => console.log(err));
        }
    }

    setupRanking = () => {
        this.getTop("requested").then(res=>{
            console.log(res);
            let items = []
            res.forEach((arrayItem) => {
                items.push({url: arrayItem.originalUrl, number: arrayItem.requested});
            });
            this.setState({
                topReq: items
            })
        });
        this.getTop("submitted").then(res=>{
            let items = []
            res.forEach((arrayItem) => {
                items.push({url: arrayItem.originalUrl, number: arrayItem.submitted});
            });
            this.setState({
                topSub: items
            })
        });;
    }

    getTop = (columnName) => {
        return new Promise((resolve, reject)=>{
            let searchColumn = {column: columnName};
            API.findAll(searchColumn)
            .then(res => {
                // res.data.forEach((arrayItem) => {
                //     items.push({url: arrayItem.originalUrl, number: arrayItem.requested});
                // });
                // this.setState({
                //     item: items
                // })
                resolve(res.data);
            })
        })
    }
    

    handleChange = inputUrl => event => {
        this.setState({ [inputUrl]: event.target.value });
    };

    generateRandomCode = (length) =>{
        const random = Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
        //console.log(random);
        return random;
    }

    handleSubmit = () =>{
        let storeInfo = {
            originalUrl: this.state.inputUrl.replace(/(^\w+:|^)\/\//, ''),
            shortCode: this.generateRandomCode(4)
        };
    
        API.findLong(storeInfo)
            .then(res => {
                if(res.data){
                    //console.log(res.data);
                    this.setState({
                        shortUrl: window.location.href+res.data.shortCode
                    })
                    res.data.submitted += 1;
                    API.updateSubmitted(res.data)
                        .then(res2=>{
                            console.log(res2.data);
                            this.setupRanking();
                        })
                }else{
                    API.create(storeInfo)
                        .then(res2 =>{
                            console.log(res2.data);
                            this.setState({
                                shortUrl: window.location.href+res2.data.shortCode
                            })
                        })
                }
          })
          .catch(err => console.log(err));
    }

    render(){
        return(
            <div className='wrapper'>
                    
                <Typography component="h1" variant="h2" align="center" color="textPrimary" className="header" gutterBottom>
                    URL Shortener
                </Typography>
                    
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
                            <Typography className="shortBox">
                                {this.state.shortUrl !== "" ? this.state.shortUrl : "Shortened Url"}
                            </Typography>
                        </Paper>
                    </Grid>
                    {this.state.topSub.length ? (
                        <Grid item xs={6}>
                            <RankBox
                                title="Top Submitted Links"
                                item={this.state.topSub}
                            />
                        </Grid>
                    ) :(
                        <Grid item xs={6}>
                            <Typography>No Ranking</Typography>
                        </Grid>
                    )}
                    {this.state.topReq.length ? (
                        <Grid item xs={6}>
                            <RankBox
                                title="Top Requested Links"
                                item={this.state.topReq}
                            />
                        </Grid>
                    ) :(
                        <Grid item xs={6}>
                            <Typography>No Ranking</Typography>
                        </Grid>
                    )}
                </Grid>
            </div>
            
        );
    }
}

export default Main;