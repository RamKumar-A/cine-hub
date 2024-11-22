import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Gold
      light: '#FFE733', // Lighter Gold
      dark: '#CCAC00', // Darker Gold
      contrastText: '#FFFFFF', // White for contrast
    },
    secondary: {
      main: '#B22222', // Firebrick Red
      light: '#FF5722', // Lighter Firebrick Red
      dark: '#8B0000', // Darker Firebrick Red
      contrastText: '#FFFFFF', // White for contrast
    },
    background: {
      default: '#1C1C1C', // Dark Charcoal
      paper: '#2c2c2c', // Slightly lighter charcoal for elevated surfaces
    },
    text: {
      primary: '#FFFFFF', // White for main text
      secondary: '#D3D3D3', // Silver Gray for secondary text
      disabled: '#A0A0A0', // Muted Gray for disabled text
      main: '#000',
    },
    divider: '#333333', // Subtle Divider
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // backgroundColor: '#2c2c2c',
          color: '#0e0e0e',
        },
      },
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0f',
          // '& .MuiOutlinedInput-root': {
          //   '& fieldset': {
          //     borderColor: '#FF5722',
          //   },
          //   '&:hover fieldset': {
          //     borderColor: '#FFC107',
          //   },
          //   '&.Mui-focused fieldset': {
          //     borderColor: '#4CAF50',
          //   },
          // },
        },
      },
    },
  },

  typography: {
    // fontFamily: "'Roboto', sans-serif", // Default font
    h3: {
      color: '#fff',
    },
    h5: {
      color: '#fff',
    },
    body1: {
      color: '#fff',
    },
    body2: {
      color: '#fff',
    },
    button: {
      color: '#fff',
    },
    caption: {
      color: '#fff',
    },
    subtitle1: {
      color: '#fff',
    },
    subtitle2: {
      color: '#fff',
    },
  },
});
