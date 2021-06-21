import React from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import {Button, Container, TextField, Typography,} from "@material-ui/core";
import Logo from "./assets/Logo.png";
import Signature from "./Signature";
import {CheckOutlined, FileCopyOutlined} from "@material-ui/icons";
import "./App.css";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
            },
            "& .label-root": {
                margin: theme.spacing(1),
            },
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: "left",
            color: theme.palette.text.secondary,
        },
        centeredImage: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "150px",
            height: "150px",
        },
        centeredText: {
            textAlign: "center",
        },
        warningIconStyle: {
            textAlign: "center",
            color: "#FFDC00",
            verticalAlign: "middle",
        },
    })
);

export interface SignatureProps {
    name: string;
    designation: string;
    department: string;
    phone: string;
  
}

interface State extends SignatureProps {
    
    copied: boolean;
}

const initialState: State = {
    name: "",
    designation: "",
    department: "",
    phone: "",

    copied: false,
};

function App() {
    const classes = useStyles();
    const [state, setState] = React.useState<State>(initialState);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
       
            setState((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }));
        
    };

    const enoughData = () => {
        
            if (state.name || state.phone || state.designation || state.department) {
                return (
                    <React.Fragment>
                        <Signature
                            name={state.name}
                            designation={state.designation}
                            department={state.department}
                            phone={state.phone}
                           
                        />
                        <br/>
                        <Button
                            onClick={copyToClipboard}
                            endIcon={state.copied ? <CheckOutlined/> : <FileCopyOutlined/>}
                        >
                            {state.copied ? "Copied" : "Copy to clipboard"}
                        </Button>
                    </React.Fragment>
                );
            } 
        
     
    };

    const copyToClipboard = () => {
        let copyText = document.querySelector(".Signature");
        console.log(copyText);
        const range = document.createRange();
        if (copyText) {
            range.selectNode(copyText);
            
        }
        const windowSelection = window.getSelection();
        if (windowSelection) {
            
            console.log(range);
            windowSelection.removeAllRanges();
            windowSelection.addRange(range);
        }
        try {
            let successful = document.execCommand("copy");
            console.log(successful ? "Success" : "Fail");
            setState((prevState) => ({
                ...prevState,
                copied: true,
            }));
        } catch (err) {
            console.log("Fail");
        }
    };

    const isStateChanged = () => {
        return JSON.stringify(state) === JSON.stringify(initialState);
    };

    const clearState = () => {
        setState(initialState);
    };
   

    

    return (
        <Container>
            <img className={classes.centeredImage} src={Logo} alt={"logo"}/>
            <Typography variant="h3" gutterBottom className={classes.centeredText}>
                UofL Email Signature
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                                fullWidth={true}
                                required
                                label="Name"
                                value={state.name}
                                name={"name"}
                                onChange={handleChange}
                                autoFocus={true}
                            />
                            <TextField
                                fullWidth={true}
                                required
                                label="Designation"
                                value={state.designation}
                                name={"designation"}
                                onChange={handleChange}
                            />
                             <TextField
                                fullWidth={true}
                                required
                                label="Department"
                                value={state.department}
                                name={"department"}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth={true}
                                required
                                label="Telephone"
                                value={state.phone}
                                name={"phone"}
                                onChange={handleChange}
                            />
                            <br/>
                        
                            <Button
                                disabled={isStateChanged()}
                                onClick={clearState}
                                color={"secondary"}
                                variant="outlined"
                            >
                                Clear
                            </Button>
                        </form>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>{enoughData()}</Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
