import React,{useEffect,useRef}from 'react';
import {Grid } from '@material-ui/core'; 
import {PushToTalkButton, PushToTalkButtonContainer} from '@speechly/react-ui';
import{SpeechState,useSpeechContext} from '@speechly/react-client';

import Details from './components/Details/Details';
import useStyles from './styles'
import Main from './components/Main/Main';
// import { MailOutlineRounded } from '@material-ui/icons';

const App = () => {
  const classes= useStyles();
  const {SpeechState} =useSpeechContext();
  // const executeScroll=() =>main.current.scrollIntoView();
  // const main =useRef(null);

  // useEffect(()=>{
  //   if(SpeechState== SpeechState.Recording){
  //     executeScroll();
  //   }

  // },[SpeechState]);

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height:'100vh' }} >
        <Grid item xs={12} sm={4} className={classes.mobile}>
            <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
            <Main/>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
            <Details title="Expense"/>
        </Grid>

      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton/>
        
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
