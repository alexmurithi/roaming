import React from 'react';
import Header from './Components/Header';
import AirtimeBal from './Components/AirtimeBal';
import {ThemeProvider} from '@material-ui/styles';
import theme from './Themes/Theme';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
         <Header />
         <AirtimeBal />
      </ThemeProvider>
     
    </React.Fragment>
  );
}

export default App;
