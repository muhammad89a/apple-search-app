import Box from '@material-ui/core/Box';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CardResult from '../CardResult'

export default function GridResultCards() {
    const [load,SetLoad] = useState(true)
    useEffect(()=>{
      setTimeout(() => {
        SetLoad(false)
      }, 1000);
    },[])
    return (
      <Box style={{maxHeight: '100vh', overflow: 'auto',paddingBottom:'200px'}} overflow="hidden">
        <CardResult loading={load}/>	
      </Box>
    );
  }