import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import teal from "@material-ui/core/colors/teal";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import 'react-toastify/dist/ReactToastify.min.css';


const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: teal
    }
  });

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
       <CssBaseline />
        <App />
    </MuiThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
