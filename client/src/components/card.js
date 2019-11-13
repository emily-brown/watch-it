import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import "./card.css"
import color from "@material-ui/core/colors/lightGreen";

// import HUE from '@material-ui/core/colors/HUE';
// import AddIcon from '@material-ui/icons/Add';
// import { Icon } from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    card: {
        width: "90vw",
        maxWidth: 360,
        background: "white",
        border: "solid #41494d",
        margin: 15,
        display: "inline-block",
        verticalAlign: "top",
        textAlign: "left",
    },

  }));

// const color1 = blue[500];
// const color2 = green[500];


export function MovieCard({ visible, title, plot, image, save,actionButton = true,watched,deleteMovie,markWatched,id,index = 0}) {
    const classes = useStyles();
    if (visible) {
        if (image === "N/A") {
            image = "https://picsum.photos/200/300"
        }
        let buttonA = "";
        let buttonB = "";
        if(actionButton){
           buttonA = <Fab href="/api/save" aria-label="add" className={classes.margin} onClick={save}><Icon>add_circle</Icon></Fab>
        }else {
            buttonA = (<Fab href="/api/delete" className={classes.margin} onClick={e => deleteMovie(e, id)} id={id} data-index={index}><Icon>delete</Icon></Fab>) 
            console.log("delete");
            
            buttonB = (
                <a id="watchedbtn"
                    href="/movies"
                    className={watched ? 'btn btn-warning' : 'btn btn-secondary'}
                    
                    onClick={e => markWatched(e, id)}
                >
                    <Icon>stars</Icon>
                </a>
                
            );

        }

        // let buttonB = <a href="/api/save" className={watched ? "btn btn-success":"btn btn-secondary"} onClick={()=> markWatched(id)}>Watched</a>
    
        return (
            <Card className={classes.card}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={image} className="card-img img-fluid" alt={title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{plot}</p>
                            <div className="buttons">
                            {buttonA}
                            {buttonB}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        )
    } else {
        return (<></>)
    }
}