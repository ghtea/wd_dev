import React, {useEffect} from 'react';
import {  BrowserRouter, Route, Switch } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';
import queryString from 'query-string';

import {useSelector, useDispatch} from "react-redux";
import Immutable, {toJS} from 'immutable';

import * as config from './config';
//import replaceTheme from "./redux/thunks/replaceTheme";
//import { useCookies } from 'react-cookie';
//import dictCode from './others/dictCode'

//import Nav from "./routes/Nav";
//import Reaction from "./routes/Reaction";
//import Notification from "./routes/Notification";


//import Loading from "./components/_/Loading";
import Home from "./routes/Home";
import Nav from "./routes/Nav";
import Color from "./routes/Color";

//import addDeleteNotification from "./redux/thunks/addDeleteNotification";
import * as colorAssignment from "./store/actions/colorAssignment";
//import {replaceDataAuth, replaceData2Auth} from "./redux/actions/auth";


import {ThemeProvider } from 'styled-components';
//import themes from "./styles/themes"

import GlobalStyle_Reset from './styles/GlobalStyle_Reset';
import GlobalStyle_Default from './styles/GlobalStyle_Default';

import {Div_Content} from './App_Styled'


function App({
  
}) {
  
  const usingTheme = useSelector( state => state.theme.get('usingTheme'), [] );
  
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch( colorAssignment.return_GET_LIST_COLOR_ASSIGNMENT() );
  }, [])
  
  return (
    <>
    
    <ThemeProvider theme={usingTheme} >
    

    <GlobalStyle_Reset/>
    <GlobalStyle_Default/>
    
    <BrowserRouter>
      
      
      <Route path="/" component={Nav} />
      
      
      <Div_Content className='Div_Content'>
      
        
        <Switch >
          
          <Route path="/" exact={true} component={Home} />
          <Route path="/color" component={Color} />
          
        </Switch >
        
      </Div_Content>
      
      
    </BrowserRouter>
    
    
    </ThemeProvider>
    
    </>
  );
}



/*
  <Route path="/" component={Nav} />
          <Route path="/auth" component={Auth} />
          
          <Route path="/basic" component={Basic} />
*/


export default App;