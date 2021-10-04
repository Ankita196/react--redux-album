import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAlbums } from "../redux/actions/albumsActions";
import Album from "./Album";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    display:'flex',
    flexDirection:"row"
    
  },
 
  album :{
    color:'white',  
    fontSize:30,
    fontWeight:"bold",
    fontFamily: "sans-serif",
    textAlign:"left",
    marginLeft:24
  },
  
 root1: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  div1:{
    display:"flex",
     justifyContent:"space-evenly"
  },
  album1:{
    color:"pink",
    fontSize:40
  },
  grid1:{
       marginLeft: 'auto',
        alignItems: 'center',
        
  }
}));


const Albums = () => {
   const classes = useStyles();
   
  const albums = useSelector((state) => state.allAlbums.albums);
  const dispatch = useDispatch();
  const fetchAlbums = async () => {
    const response = await axios
      .get("https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setAlbums(response.data));
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  console.log("Albums :", albums);
  return (
   
      <div >
    <br/><br/><br/><br/>
    <div >
    <div className={classes.div1}>
    <div >
     <Typography className={classes.album}><span className={classes.album1}>Music </span> for Everyone</Typography> 
     </div>
     
     
     </div>
      <div >
     <br/>
     <Grid item
              xs={12}
              sm={3}
           ><Album /> </Grid>
    
    </div>
   </div>
    </div>
  );
};

export default Albums;