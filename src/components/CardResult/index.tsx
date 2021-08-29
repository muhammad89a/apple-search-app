import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {Skeleton} from '@material-ui/lab';
import { useSelector } from "react-redux";
import Result from '../../redux/model/Result';
import { RootState } from '../../redux/reducers';

interface MediaProps {
  loading?: boolean;
  error?: boolean;
}

export default function CardResult(props: MediaProps) {
  const { loading = false } = props;
  const { error = false } = props;
  const errorData = useSelector(
    (state: RootState) => state.search.error
  );
  const dataList = useSelector(
    (state: RootState) => state.search.searchResponse.results
  );
  console.log("dataList=>",dataList);
  
  return (
    <>{(error ||errorData.length>0 || !dataList|| dataList.length === 0) ?(
    <h1 style={{width:"100%", textAlign :"center"}}>
      {errorData}
    </h1>)
    :(<Grid container wrap="wrap">
      {(loading ? Array.from(new Array(10)) : dataList).map((item:Result, index:number) => (
        <Box style={{backgroundColor:"rgba(0,0,0,0.05)",padding:"8px"}} key={index} width={226} marginRight={2} my={5}>
          {item ? (
            <img style={{ width: 210, height: 118 }} alt={item.collectionName} src={item.artworkUrl100} />
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}
          {item ? (
            <Box pr={2}>
              <Typography gutterBottom variant="body2">
                {item.collectionName}
              </Typography>
              <Typography display="block" variant="caption" color="textSecondary">
                {item.country}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`${item.trackPrice} • ${item.releaseDate}`}
              </Typography>
            </Box>
          ) : (
            <Box pt={2.5}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>)
    }
    </>
  );
}

