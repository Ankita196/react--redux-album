import React, { useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAlbums } from '../redux/actions/albumsActions';
import Album from './Album';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 30;
  font-weight:bold;
  text-align: center;
  color: white;
  fontFamily: sans-serif;
`;
const Span = styled.span`
 color: pink;
 
`;

const Div = styled.div`
 display:flex;
 justify-content:space-evenly;
 
`;

const Albums = () => {
  const albums = useSelector((state) => state.allAlbums.albums);
  const dispatch = useDispatch();
  const fetchAlbums = async () => {
    const response = await axios
      .get(
        'https://telugu-skillhub-own-music-api-default-rtdb.firebaseio.com/music-api/-MdCU2vPsoSsulYD2akz.json'
      )
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(setAlbums(response.data));
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  console.log('Albums :', albums);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Div>
          <div>
            <Title>
              <Span>Music </Span> for Everyone
            </Title>
          </div>
        </Div>
        <div>
          <br />
          <Album />
        </div>
      </div>
    </div>
  );
};

export default Albums;
