import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import { Input } from '@material-ui/core';

const theme = createMuiTheme({
  spacing: 8,

  typography: {
    useNextVariants: true,
    h2: {
      fontFamily: 'SF Compact Display',
      fontWeight: 'Bold',
      fontSize: '32px',
      lineHeight: '38px',
      color: '#202226',
    },
    h3: {
      fontFamily: 'SF Compact Display',
      fontWeight: 'Semibold',
      fontSize: '18px',
      lineHeight: '38px',
      color: '#202226',
    },

    h4: {
      fontFamily: 'SF Compact Display',
      fontWeight: 'Semibold',
      fontSize: '18px',
      lineHeight: '27px',
      color: '#202226',
    },

    h5: {
      fontFamily: 'SF Compact Display',
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '18px',
      color: '#202226',
    }

  
  },
  palette: {
    primary: {
      main: '#5651FF'
    },
    secondary: {
      main: '#F2F3F6'
    },
    tag: {
      main: '#000000',
    },
  },
  switch: {
    colorPrimary: green[500],
    trackOnColor: green[100],
    thumbOffColor: red[700],
    trackOffColor: red[100],
  },
});

export default theme;
