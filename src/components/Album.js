import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 380,
    width: 270,
    backgroundColor: '#212121',
    padding: 10,
  },
  icon: {
    color: 'green',
    fontSize: 70,
    marginTop: 140,
    marginLeft: 130,
  },
}));
const Title = styled.h3`
 color: 'white';
  font-size: 30;
  font-weight:bold;
  fontFamily: sans-serif;
`;
const Div = styled.div`
display:flex;
flex-direction:row;
`;
const Div1 = styled.div`
height:230;
    width:200;
    marginTop:40;
     margin-right: auto;
    margin-left: auto;
    background-size:100%;
`;
const Grid1 = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

    
`;
const Paper = styled.div`
height:380;
width:270;
backgroundColor:"#212121";
padding:10;

    
`;

const Album = () => {
  const classes = useStyles();

  const albums = useSelector((state) => state.allAlbums.albums);
  const renderList = albums.map((album) => {
    const { id, img, movie, singer, song, title } = album;
    return (
      <Grid item xs={12} sm={3}>
        <Grid1 container className="root" spacing={2}>
          <Paper className={classes.paper}>
            <Div1
              style={{
                backgroundImage: `url('${img}')`,
              }}
            >
              {' '}
              <IconButton>
                <PlayCircleFilledIcon className={classes.icon} />
              </IconButton>
            </Div1>

            <br />
            <Title>{title}</Title>
            <Title>{singer}</Title>
          </Paper>
        </Grid1>
      </Grid>
    );
  });
  return (
    <>
      {' '}
      <Div>
        <Grid container spacing={5}>
          {renderList}
        </Grid>
      </Div>
    </>
  );
};

export default Album;
