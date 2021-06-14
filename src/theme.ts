import { ThemeOptions } from '@material-ui/core/styles';

const theme : ThemeOptions ={
    palette: {
        primary:{
          main: '#FE805C',
        },
        secondary:{
          main: '#4643D3'
        },
        error: {
            main: '#ff5c5c',
            light: 'rgba(246, 36, 89, 0.1)',
        },
        success: {
            main: '#41d6a8',
            light: 'rgba(65, 214, 143,0.1)',
        },
        info: {
            main: '#4b7ccf',
        },
        background: {
            paper: '#fff',
        },
        text: {
            primary: '#12121F',
            secondary: '#fff',
            disabled: '#c7c7c7',
        },
    },
    typography: {
        fontSize: 14,
        fontWeightLight: 500,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 900,
        fontFamily: "Roboto",
    },
    shape: {
        borderRadius: 12,
    },
    spacing: (factor) => `${factor}rem`,
    overrides: {
        MuiTypography: {
            root: {
                fontSize: '1.4rem',
            },
            h1: {
                fontSize: '3.2rem',
            },
            h2: {
                fontSize: '3rem',
            },
            h3: {
                fontSize: '2.7rem',
            },
            h4: {
                fontSize: '2.4rem',
            },
            h5: {
                fontSize: '2.2rem',
            },
            h6: {
                fontSize: '2rem',
            },
            subtitle1: {
                fontSize: '1.8rem',
            },
            subtitle2: {
                fontSize: '1.6rem',
            },
            body1: {
                fontSize: '1.5rem',
            },
            body2: {
                fontSize: '1.4rem',
            },
        },
        MuiLinearProgress: {
            bar: {
                borderRadius: '2.2rem',
            },
        },
        MuiPaper: {
            root: {
                borderRadius: '1.2rem',
                padding: '1.6rem',
            }
        },
        MuiButton: {
            root: {
                textTransform: 'unset',
                padding: '1rem 1.5rem',
                borderRadius: '2.4rem',
                lineHeight: 1,
            },
            label: {
                fontSize: 12,
                color: '#fff',
            },
            text: {
                color: '#fff',
            },
        },
        MuiCircularProgress: {
            circle: {
                strokeWidth: 2.7,
            },
        },
    }
};

export default theme;
